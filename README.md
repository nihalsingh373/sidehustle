# Nihal — Video Editor Portfolio

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm start
# Opens at http://localhost:3000

# 3. Build for production
npm run build
```

## Customise

### Add your Instagram handle
Open `src/data.js` and update:
```js
instagram: 'https://instagram.com/YOUR_HANDLE',
instagramDisplay: '@your_handle',
```

### Add your thumbnail images
1. Put your image files in the `/public` folder  
   e.g. `public/thumb1.jpg`
2. In `src/data.js`, update the thumbs:
```js
{ id: 1, label: 'Thumbnail Design #1', col: COLORS.red, img: '/thumb1.jpg' },
```

### Add your design images
Same as thumbnails — put images in `/public` and update the `img` field in the `designs` array.

### Change videos
Update the `ytid` fields in `src/data.js` with your YouTube video IDs.

## Deploy for free
```bash
npm run build
```
Then drag the `/build` folder into [Netlify Drop](https://app.netlify.com/drop) — live in seconds.
