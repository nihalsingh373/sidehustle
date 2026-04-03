import { useEffect } from 'react';

export default function Modal({ item, onClose }) {
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
  }, [onClose]);

  if (!item) return null;

  const isShort   = item.format === 'short';
  const catLabel  = item.catLabel || (isShort ? 'Short Form · 9:16' : 'Project');
  const accentCol = item.col || '#E24B4A';
  

  return (
    <div
      className="modal-bg"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className={`modal-box ${isShort ? 'portrait' : ''}`}>
        
        {/* Close Button */}
        <button className="mclose" onClick={onClose}>✕</button>

        {/* MEDIA SECTION */}
        <div className={`mvideo ${isShort ? 'portrait' : ''}`}>
          
          {/* YouTube */}
          {item.ytid ? (
            <iframe
              src={`https://www.youtube.com/embed/${item.ytid}?autoplay=1&rel=0&playsinline=1`}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              title={item.title || item.label}
            />
          ) : item.img ? (
            
            /* IMAGE (THUMBNAIL / DESIGN) */
            <img
              src={item.img}
              alt={item.title || 'design'}
              className="mimg"
            />

          ) : (
            <div className="mvideo-ph">
              <h3>No Media Found</h3>
            </div>
          )}
        </div>

        {/* INFO SECTION */}
        <div className="minfo">
          <div className="mcat" style={{ color: accentCol }}>
            {catLabel}
          </div>

          <div className="mtitle">
            {item.title || item.label}
          </div>

          <div className="mdesc">
            {item.desc || item.sub || ''}
          </div>

          {/* Optional Instagram Button */}
          {item.insta && (
            <a
              href={item.insta}
              target="_blank"
              rel="noopener noreferrer"
              className="insta-btn"
            >
              View on Instagram
            </a>
          )}
        </div>

      </div>
    </div>
  );
}