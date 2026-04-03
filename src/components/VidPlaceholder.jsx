export function VidPlaceholder({ col, label }) {
  return (
    <div className="vid-ph" style={{ background: `linear-gradient(135deg,${col}1a,${col}2e)` }}>
      <div className="vid-ph-ring" style={{ background: `${col}22`, border: `1.5px solid ${col}44` }}>
        <div className="vid-ph-tri" style={{ borderTop: '9px solid transparent', borderBottom: '9px solid transparent', borderLeft: `16px solid ${col}` }} />
      </div>
      <div className="vid-ph-label" style={{ color: `${col}88` }}>{label}</div>
    </div>
  );
}

export function DesignPlaceholder({ col, label }) {
  return (
    <div style={{ width: '100%', height: '100%', background: `linear-gradient(135deg,${col}12,${col}28)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8 }}>
      <div style={{ fontSize: 26, opacity: .25 }}>🎨</div>
      <div style={{ fontSize: 10, color: `${col}77`, textAlign: 'center', padding: '0 14px', lineHeight: 1.4 }}>{label}</div>
    </div>
  );
}
