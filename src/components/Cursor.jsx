import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const [hov, setHov] = useState(false);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const move = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top  = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', move);

    let raf;
    const loop = () => {
      const p = pos.current;
      p.rx += (p.mx - p.rx) * 0.12;
      p.ry += (p.my - p.ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = p.rx + 'px';
        ringRef.current.style.top  = p.ry + 'px';
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    const selectors = 'a, button, .vcard, .featured, .tcard, .dcard, .help-card, .fpill, .phone-frame, .phone-cover';
    const on  = () => setHov(true);
    const off = () => setHov(false);
    const attach = () => {
      document.querySelectorAll(selectors).forEach(el => {
        el.addEventListener('mouseenter', on);
        el.addEventListener('mouseleave', off);
      });
    };
    attach();
    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className={`cursor ${hov ? 'hov' : ''}`} />
      <div ref={ringRef} className={`cursor-ring ${hov ? 'hov' : ''}`} />
    </>
  );
}
