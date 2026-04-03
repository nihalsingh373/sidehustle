import { useState, useEffect } from 'react';
import Cursor      from './components/Cursor';
import Loader      from './components/Loader';
import Ticker      from './components/Ticker';
import PhoneCard   from './components/PhoneCard';
import Modal       from './components/Modal';
import { VidPlaceholder, DesignPlaceholder } from './components/VidPlaceholder';
import useReveal   from './hooks/useReveal';
import { shorts, longVid, thumbs, designs, helpData, contact } from './data';
import './index.css';

// ─── SECTION WRAPPER WITH SCROLL REVEAL ──────────────────────────────────────
function Section({ children, style, delay = '' }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${delay}`} style={style}>
      {children}
    </div>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal();
  return (
    <div className="hero">
      <div ref={r1} className="reveal d1 hero-tag">
        <span className="hero-dot" />
        Open to new projects
      </div>
      <h1 ref={r2} className="reveal d2">NIHAL</h1>
      <p ref={r3} className="reveal d3 hero-sub">
        Video editor, thumbnail designer &amp; YT strategist. I make content that holds attention — from the hook to the end screen.
      </p>
      <div ref={r4} className="reveal d4 hero-chips">
        {['Short Form', 'Long Form', 'Thumbnails', 'YT SEO', 'Graphic Design'].map(c => (
          <span key={c} className="chip">{c}</span>
        ))}
      </div>
    </div>
  );
}

// ─── FEATURED LONG FORM ──────────────────────────────────────────────────────
function Featured({ onOpen }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{ marginTop: 40 }}>
      <div className="sec-lbl">Featured</div>
      <div
        className="featured"
        onClick={() => onOpen({ ...longVid, format: 'long' })}
      >
        <div className="feat-bg">
          <div className="feat-glow" />
          <div className="feat-wm">LONG FORM</div>
        </div>
        <div className="feat-overlay">
          <div className="feat-badge">Long Form · 16:9</div>
          <div className="feat-title">Long Form Edit — Click to Watch</div>
          <div className="feat-meta">YouTube · Full edit</div>
        </div>
        <div className="play-ring"><div className="tri" /></div>
      </div>
    </div>
  );
}

// ─── VIDEO GRID ──────────────────────────────────────────────────────────────
function VideoGrid({ cat, onOpen }) {
  const ref = useReveal();
  const showShorts = cat === 'all' || cat === 'short';
  const showLong   = cat === 'all' || cat === 'long';
  const labels = { all: 'Video Edits', short: 'Short Form Edits', long: 'Long Form Edit' };

  return (
    <div ref={ref} className="reveal" style={{ marginTop: 40 }}>
      <div className="sec-lbl">{labels[cat] || 'Work'}</div>

      {/* SHORT FORM — phone frames, 9:16, plays inline */}
      {showShorts && (
        <div style={{ marginBottom: showLong ? 36 : 0 }}>
          {cat === 'all' && <div className="format-mini">Short Form · 9:16</div>}
          <div className="grid-short">
            {shorts.map(s => <PhoneCard key={s.id} video={s} />)}
          </div>
        </div>
      )}

      {/* LONG FORM — landscape card, opens modal */}
      {showLong && (
        <>
          {cat === 'all' && <div className="format-mini">Long Form · 16:9</div>}
          <div className="grid-long">
            <div
              className="vcard"
              onClick={() => onOpen({ ...longVid, format: 'long' })}
            >
              <div className="vthumb">
                <div className="vthumb-inner">
                  <VidPlaceholder col={longVid.col} label={longVid.title} />
                </div>
                <div className="hover-play">
                  <div className="mplay"><div className="mtri" /></div>
                </div>
              </div>
              <div className="vbody">
                <div className="vcat" style={{ color: longVid.col }}>Long Form · 16:9</div>
                <div className="vtitle">{longVid.title}</div>
                <div className="vsub">{longVid.sub}</div>
                <div className="vtags">
                  {longVid.tags.map(t => <span key={t} className="vtag">{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// ─── THUMBNAILS ──────────────────────────────────────────────────────────────
function Thumbnails({ onOpen }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{ marginTop: 48 }}>
      <div className="sec-lbl">Thumbnail Designs</div>
      <div className="thumb-grid">
        {thumbs.map(t => (
          <div
            key={t.id}
            className="tcard"
            onClick={() => onOpen({ ...t, format: 'thumb', catLabel: 'Thumbnail Design' })}
          >
            <div className="timg">
              <div className="timg-inner">
                {t.img
                  ? <img src={t.img} alt={t.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  : <VidPlaceholder col={t.col} label={t.label} />
                }
              </div>
            </div>
            <div className="tlabel">{t.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── GRAPHIC DESIGN ──────────────────────────────────────────────────────────
function Designs({ onOpen }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{ marginTop: 48 }}>
      <div className="sec-lbl">Graphic Design</div>
      <div className="design-grid">
        {designs.map(d => (
          <div
            key={d.id}
            className="dcard"
            onClick={() => onOpen({ ...d, format: 'design', catLabel: 'Graphic Design' })}
          >
            <div className="dimg">
              <div className="dimg-inner">
                {d.img
                  ? <img src={d.img} alt={d.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  : <DesignPlaceholder col={d.col} label={d.label} />
                }
              </div>
            </div>
            <div className="dlabel">
              <div className="dlabel-cat">Graphic Design</div>
              <div className="dlabel-title">{d.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── HOW I HELP ──────────────────────────────────────────────────────────────
function HowIHelp() {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{ marginTop: 56 }}>
      <div className="sec-lbl">How I Help You Grow</div>
      <div className="help-grid">
        {helpData.map((h, i) => (
          <div key={i} className={`help-card ${h.colorClass}`}>
            <div className="help-icon">{h.icon}</div>
            <div className="help-title">{h.title}</div>
            <ul className="help-list">
              {h.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────
function About() {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{ marginTop: 48 }}>
      <div className="sec-lbl">About</div>
      <div className="about-box">
        <h2>I Edit With Growth In Mind</h2>
        <div className="about-quote">
          "I'm not just cutting clips — I study your niche, watch what's working right now, and edit with retention in mind. You get someone invested in your channel, not just a freelancer."
        </div>
        <p>
          I'm a video editor and content creator with a strong eye for pacing, storytelling, and visual design.
          Whether it's a 30-second reel or a 20-minute YouTube video, I focus on making every second earn its place.
        </p>
        <div className="tools-row">
          {['Premiere Pro', 'After Effects', 'Photoshop', 'CapCut', 'DaVinci Resolve'].map(t => (
            <span key={t} className="tool">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact() {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{ marginTop: 48 }}>
      <div className="contact-box">
        <div className="contact-top">
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? Reach out — I'm available for video editing, thumbnail design, and YT SEO work.</p>
        </div>
        <div className="contact-links">
          <a className="clink" href={`mailto:${contact.email}`}>
            <div className="cicon" style={{ background: '#1a1010' }}>📧</div>
            <div>
              <div className="cinfo-label">Email</div>
              <div className="cinfo-val">{contact.email}</div>
            </div>
          </a>
          <a className="clink" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
            <div className="cicon" style={{ background: '#0e1a12' }}>💬</div>
            <div>
              <div className="cinfo-label">WhatsApp</div>
              <div className="cinfo-val">{contact.whatsappDisplay}</div>
            </div>
          </a>
          <a className="clink" href={contact.instagram} target="_blank" rel="noopener noreferrer">
            <div className="cicon" style={{ background: '#1a0e18' }}>📸</div>
            <div>
              <div className="cinfo-label">Instagram</div>
              <div className="cinfo-val">{contact.instagramDisplay}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── FILTER PILLS ────────────────────────────────────────────────────────────
const CATS = [
  { key: 'all',       label: 'All' },
  { key: 'short',     label: 'Short Form' },
  { key: 'long',      label: 'Long Form' },
  { key: 'thumbnail', label: 'Thumbnails' },
  { key: 'graphic',   label: 'Graphic Design' },
];

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [cat,   setCat]   = useState('all');
  const [modal, setModal] = useState(null);

  const showFeatured = cat === 'all' || cat === 'long';
  const showGrid     = cat === 'all' || cat === 'short' || cat === 'long';
  const showThumbs   = cat === 'all' || cat === 'thumbnail';
  const showDesigns  = cat === 'all' || cat === 'graphic';

  // grid cat: if thumbnail/graphic filter active, still show all videos when grid is shown
  const gridCat = (cat === 'thumbnail' || cat === 'graphic') ? 'all' : cat;

  return (
    <>
      <Loader />
      <Cursor />

      <div className="wrap">
        <Hero />
        <Ticker />

        {/* FILTERS */}
        <Section style={{ margin: '40px 0 0' }}>
          <div className="filters">
            {CATS.map(c => (
              <button
                key={c.key}
                className={`fpill ${cat === c.key ? 'on' : ''}`}
                onClick={() => setCat(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Section>

        {showFeatured && <Featured onOpen={setModal} />}
        {showGrid     && <VideoGrid cat={gridCat} onOpen={setModal} />}
        {showThumbs   && <Thumbnails onOpen={setModal} />}
        {showDesigns  && <Designs onOpen={setModal} />}

        <HowIHelp />
        <About />
        <Contact />

        <div className="footer">
          <div className="footer-name">NIHAL</div>
          <div className="footer-copy">Open to collabs &amp; projects · 2025</div>
        </div>
      </div>

      {modal && <Modal item={modal} onClose={() => setModal(null)} />}
    </>
  );
}
