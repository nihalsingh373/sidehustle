export const COLORS = {
  red:    '#E24B4A',
  gold:   '#EF9F27',
  teal:   '#1D9E75',
  blue:   '#378ADD',
  purple: '#7F77DD',
};

// ─── SHORT FORM VIDEOS (9:16 portrait) ───────────────────────────────────────
export const shorts = [
  {
    id: 1,
    zoom: true,
    title: 'Short Form Edit #1',
    sub: 'YouTube Shorts',
    tags: ['Hook', 'Transitions', 'Audio Sync'],
    col: COLORS.red,
    ytid: 'rxlLg_6kmGs',
     format: 'short', 
  },
  {
    id: 2,
    title: 'Short Form Edit #2',
    sub: 'YouTube Shorts',
    tags: ['Fast Cuts', 'Motion', 'Captions'],
    col: COLORS.gold,
    ytid: 'mhYs8WrtswI',
  },
];

// ─── LONG FORM VIDEO (16:9 landscape) ────────────────────────────────────────
export const longVid = {
  id: 3,
  title: 'Long Form Edit',
  sub: 'YouTube · Full edit',
  tags: ['Storytelling', 'Colour Grade', 'Audio Mix'],
  col: COLORS.blue,
  ytid: 'Tm2OvXgS2rc',
};

// ─── THUMBNAILS ───────────────────────────────────────────────────────────────
export const thumbs = [
  {
    id: 1,
    title: 'Wheel of Fame',
    sub: 'High CTR YouTube Thumbnail',
    col: COLORS.red,
    img: '/thumbnail/first.png',
  },
  {
    id: 2,
    title: 'Gaming Reaction Thumbnail',
    sub: 'High CTR YouTube Thumbnail',
    col: COLORS.gold,
    img: '/thumbnail/second.png',
  },
];

// ─── GRAPHIC DESIGNS ─────────────────────────────────────────────────────────
export const designs = [
  {
    id: 1,
    title: 'Umero Brand Design',
    sub: 'Social Media Creative',
    col: COLORS.teal,
    img: '/design/umero.png',   // renamed file
  },
  {
    id: 2,
    title: 'Dessert Promotion Design',
    sub: 'Instagram Post Creative',
    col: COLORS.purple,
    img: '/design/dessert.png',
  },
];

// ─── HOW I HELP ───────────────────────────────────────────────────────────────
export const helpData = [
  {
    colorClass: 'hc-red', icon: '⚡', title: 'Short Form',
    items: ['Hook in first 3 seconds', 'Trending audio sync', 'Captions optimised for watch time', 'Pacing that keeps viewers to the end'],
  },
  {
    colorClass: 'hc-blue', icon: '🎬', title: 'Long Form',
    items: ['Chapter markers for SEO boost', 'Dead air removal for retention', 'Multi-cam & lower-thirds', 'Thumbnail + title suggestions included'],
  },
  {
    colorClass: 'hc-gold', icon: '🖼️', title: 'Thumbnails',
    items: ['High contrast, readable at small size', 'Face + emotion + text formula', 'CTR-optimised layout', 'A/B variations to test'],
  },
  {
    colorClass: 'hc-teal', icon: '🔍', title: 'YouTube SEO',
    items: ['Keyword-rich titles that rank', 'Descriptions with search intent', 'Tags, hashtags, pinned comments', 'Retention-first editing strategy'],
  },
  {
    colorClass: 'hc-purple', icon: '🎨', title: 'Graphic Design',
    items: ['Consistent brand across all content', 'Channel art & banner', 'End screens & overlays', 'Social media asset packs'],
  },
];

// ─── CONTACT ─────────────────────────────────────────────────────────────────
export const contact = {
  email:     'nihalchauhan150@gmail.com',
  whatsapp:  'https://wa.me/919973881409',
  whatsappDisplay: '+91 99738 81409',
  instagram: 'https://www.instagram.com/p/DTFS0opEYv_/',
  instagramDisplay: '@nihal_singh',
};