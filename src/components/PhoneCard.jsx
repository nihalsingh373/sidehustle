import { useState } from 'react';

export default function PhoneCard({ video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="phone-wrap">
      <div className="phone-frame">
        {/* notch */}
        <div className="phone-notch" />

        {/* screen — 9:16 */}
        <div className="phone-screen">
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${video.ytid}?autoplay=1&rel=0&playsinline=1&modestbranding=1&controls=1`}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              title={video.title}
            />
          ) : (
            <div
              className="phone-cover"
              onClick={() => setPlaying(true)}
            >
              <div
                className="cover-bg"
                style={{ background: `linear-gradient(160deg,${video.col}1a 0%,#000 100%)` }}
              />
              <div className="ph-play">
                <div className="ph-tri" />
              </div>
              <div className="ph-lbl">
                {video.title}
                <br />
                <span className="ph-tap">tap to play</span>
              </div>
            </div>
          )}
        </div>

        {/* home bar */}
        <div className="phone-bottom" />
      </div>

      {/* label below phone */}
      <div className="phone-info">
        <div className="vcat" style={{ color: video.col }}>Short Form · 9:16</div>
        <div className="vtitle">{video.title}</div>
        <div className="vtags">
          {video.tags.map(t => <span key={t} className="vtag">{t}</span>)}
        </div>
      </div>
    </div>
  );
}
