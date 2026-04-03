const WORDS = ['Video Editing','Thumbnail Design','YouTube SEO','Short Form','Long Form','Graphic Design'];
const DOUBLED = [...WORDS, ...WORDS];

export default function Ticker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {DOUBLED.map((w, i) => (
          <span key={i}>{w}</span>
        )).reduce((acc, el, i) => {
          acc.push(el);
          acc.push(<span key={`sep-${i}`} className="sep">·</span>);
          return acc;
        }, [])}
      </div>
    </div>
  );
}
