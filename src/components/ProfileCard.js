import React, { useEffect, useRef, useCallback, useMemo } from 'react';

const DEFAULT_INNER_GRADIENT = 'linear-gradient(145deg, rgba(96, 73, 110, 0.3) 0%, rgba(113, 196, 255, 0.1) 100%)';

const ANIMATION_CONFIG = {
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 100,
  INITIAL_Y_OFFSET: 80,
  DEVICE_BETA_OFFSET: 20,
  ENTER_TRANSITION_MS: 300
};

const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max);
const round = (v, precision = 3) => parseFloat(v.toFixed(precision));
const adjust = (v, fMin, fMax, tMin, tMax) => round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

// Inject keyframes for the holographic effect
const KEYFRAMES_ID = 'pc-keyframes-refined';
if (typeof document !== 'undefined' && !document.getElementById(KEYFRAMES_ID)) {
  const style = document.createElement('style');
  style.id = KEYFRAMES_ID;
  style.textContent = `
    @keyframes pc-holo-bg {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .profile-card-shell.active section {
      box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5), 0 30px 60px -30px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.1) !important;
    }
  `;
  document.head.appendChild(style);
}

const ProfileCardComponent = ({
  avatarUrl,
  iconUrl = '',
  grainUrl = '',
  innerGradient,
  behindGlowEnabled = true,
  behindGlowColor = 'rgba(188, 95, 217, 0.4)',
  behindGlowSize = '60%',
  className = '',
  enableTilt = true,
  enableMobileTilt = true,
  mobileTiltSensitivity = 5,
  miniAvatarUrl,
  name,
  title,
  handle,
  status = 'Online',
  contactText = 'Contact',
  showUserInfo = true,
  onContactClick
}) => {
  const wrapRef = useRef(null);
  const shellRef = useRef(null);
  const enterTimerRef = useRef(null);
  const leaveRafRef = useRef(null);

  const tiltEngine = useMemo(() => {
    if (!enableTilt) return null;
    let rafId = null;
    let running = false;
    let lastTs = 0;
    let currentX = 0; let currentY = 0;
    let targetX = 0; let targetY = 0;

    const setVarsFromXY = (x, y) => {
      const shell = shellRef.current;
      const wrap = wrapRef.current;
      if (!shell || !wrap) return;
      const width = shell.clientWidth || 1;
      const height = shell.clientHeight || 1;
      const percentX = clamp((100 / width) * x);
      const percentY = clamp((100 / height) * y);
      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        '--pointer-x': `${percentX}%`,
        '--pointer-y': `${percentY}%`,
        '--background-x': `${adjust(percentX, 0, 100, 35, 65)}%`,
        '--background-y': `${adjust(percentY, 0, 100, 35, 65)}%`,
        '--pointer-from-center': `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        '--pointer-from-top': `${percentY / 100}`,
        '--pointer-from-left': `${percentX / 100}`,
        '--rotate-x': `${round(-(centerX / 8))}deg`,
        '--rotate-y': `${round(centerY / 8)}deg`,
        '--card-opacity': '1'
      };
      for (const [k, v] of Object.entries(properties)) wrap.style.setProperty(k, v);
    };

    const step = ts => {
      if (!running) return;
      if (lastTs === 0) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;
      const k = 1 - Math.exp(-dt / 0.15);
      currentX += (targetX - currentX) * k;
      currentY += (targetY - currentY) * k;
      setVarsFromXY(currentX, currentY);
      if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
        rafId = requestAnimationFrame(step);
      } else { running = false; }
    };

    return {
      setImmediate(x, y) { currentX = x; currentY = y; setVarsFromXY(x, y); },
      setTarget(x, y) { targetX = x; targetY = y; if (!running) { running = true; rafId = requestAnimationFrame(step); } },
      toCenter() { if (shellRef.current) this.setTarget(shellRef.current.clientWidth / 2, shellRef.current.clientHeight / 2); },
      cancel() { if (rafId) cancelAnimationFrame(rafId); running = false; }
    };
  }, [enableTilt]);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell || !tiltEngine) return;
    const move = e => {
      const rect = shell.getBoundingClientRect();
      tiltEngine.setTarget(e.clientX - rect.left, e.clientY - rect.top);
    };
    const enter = () => { shell.classList.add('active'); };
    const leave = () => { shell.classList.remove('active'); tiltEngine.toCenter(); };
    
    shell.addEventListener('pointermove', move);
    shell.addEventListener('pointerenter', enter);
    shell.addEventListener('pointerleave', leave);
    return () => {
      shell.removeEventListener('pointermove', move);
      shell.removeEventListener('pointerenter', enter);
      shell.removeEventListener('pointerleave', leave);
      tiltEngine.cancel();
    };
  }, [tiltEngine]);

  const cardRadius = '40px';

  return (
    <div ref={wrapRef} className={`relative ${className}`} style={{ perspective: '1200px', '--card-opacity': '0' }}>
      {behindGlowEnabled && (
        <div style={{
          position: 'absolute', inset: '-20%', zIndex: 0, pointerEvents: 'none',
          background: `radial-gradient(circle at var(--pointer-x) var(--pointer-y), ${behindGlowColor} 0%, transparent ${behindGlowSize})`,
          filter: 'blur(80px)', opacity: 'var(--card-opacity)', transition: 'opacity 0.5s ease'
        }} />
      )}
      <div ref={shellRef} className="profile-card-shell relative z-10 cursor-pointer">
        <section style={{
          height: '600px', width: '400px', borderRadius: cardRadius, overflow: 'hidden',
          transform: 'rotateX(var(--rotate-y)) rotateY(var(--rotate-x))',
          transition: 'transform 0.1s ease-out, box-shadow 0.3s ease',
          background: '#0a0a0a', position: 'relative', display: 'grid'
        }}>
          {/* Base Gradient */}
          <div style={{ 
            gridArea: '1/-1', zIndex: 1, 
            backgroundImage: innerGradient || DEFAULT_INNER_GRADIENT,
            opacity: 0.6 
          }} />

          {/* Main Avatar */}
          <div style={{ gridArea: '1/-1', zIndex: 2, position: 'relative' }}>
            <img src={avatarUrl} alt={name} style={{
              width: '100%', height: '100%', objectFit: 'cover',
              filter: 'grayscale(20%) brightness(90%)',
              transform: 'scale(1.05) translateY(10px)',
              maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
            }} />
          </div>

          {/* Content Overlay */}
          <div style={{
            gridArea: '1/-1', zIndex: 5, display: 'flex', flexDirection: 'column',
            justifyContent: 'space-between', padding: '40px', pointerEvents: 'none'
          }}>
            <div style={{ textAlign: 'left', transform: 'translateZ(50px)' }}>
              <h3 style={{ fontSize: '3rem', fontWeight: 900, color: '#FFF', margin: 0, lineHeight: 0.9, letterSpacing: '-2px' }}>
                {name.split(' ')[0]}<br/>
                <span style={{ color: '#BC5FD9' }}>{name.split(' ').slice(1).join(' ')}</span>
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '3px', marginTop: '15px' }}>
                {title}
              </p>
            </div>

            {showUserInfo && (
              <div style={{ 
                background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)',
                borderRadius: '24px', padding: '20px', border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                transform: 'translateZ(30px)', pointerEvents: 'auto'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #BC5FD9' }}>
                    <img src={miniAvatarUrl || avatarUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ color: '#FFF', fontSize: '0.9rem', fontWeight: 700 }}>@{handle}</div>
                    <div style={{ color: '#25D366', fontSize: '0.75rem', fontWeight: 600 }}>● {status}</div>
                  </div>
                </div>
                <button onClick={(e) => { e.stopPropagation(); onContactClick?.(); }} style={{
                  background: '#FFF', color: '#000', border: 'none', padding: '10px 20px',
                  borderRadius: '12px', fontWeight: 800, fontSize: '0.75rem', cursor: 'pointer',
                  transition: '0.3s'
                }} className="hover-invert">
                  {contactText}
                </button>
              </div>
            )}
          </div>

          {/* Glare & Shine */}
          <div style={{
            gridArea: '1/-1', zIndex: 10, pointerEvents: 'none',
            background: `radial-gradient(farthest-corner circle at var(--pointer-x) var(--pointer-y), rgba(255,255,255,0.15) 0%, transparent 60%)`,
            mixBlendMode: 'overlay'
          }} />
        </section>
      </div>
      <style>{`
        .hover-invert:hover { background: #BC5FD9 !important; color: #FFF !important; transform: scale(1.05); }
      `}</style>
    </div>
  );
};

export default React.memo(ProfileCardComponent);