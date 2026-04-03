import { useState, useEffect } from 'react';

export default function Loader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 1800);
    const t2 = setTimeout(() => setHidden(true), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (hidden) return null;

  return (
    <div className={`loader ${done ? 'done' : ''}`}>
      <div className="loader-name">NIHAL</div>
      <div className="loader-bar" />
    </div>
  );
}
