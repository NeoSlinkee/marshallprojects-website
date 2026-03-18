# Gallery Management Guide

## Option 1: Cloudinary (Recommended - No Rebuild Needed)

Cloudinary gives you a **web dashboard** to upload/delete images without touching code.

### Setup Cloudinary (One-Time, 10 Minutes)

#### Step 1: Create Free Account
1. Go to [cloudinary.com](https://cloudinary.com)
2. Sign up for free (no credit card needed)
3. Confirm your email

#### Step 2: Get Your Cloud Name
1. Log into Cloudinary dashboard
2. Your **Cloud Name** is shown at the top (e.g., `dxyz123abc`)
3. Copy it

#### Step 3: Enable Resource List
1. Go to **Settings** → **Security**
2. Scroll to **Restricted media types**
3. Make sure "Resource list" is **enabled** (unchecked in the restricted list)
4. Save

#### Step 4: Configure the Website
1. Open `src/lib/cloudinary.js`
2. Set your cloud name:
   ```javascript
   cloudName: 'YOUR_CLOUD_NAME_HERE',
   ```
3. Save the file
4. Rebuild: `npm run build`

### Adding Images (Daily Use)

1. Log into [cloudinary.com](https://cloudinary.com)
2. Go to **Media Library**
3. Click **Upload** → select your images
4. **Important**: Add the tag `marshall-gallery` to each image:
   - Select image → click **Manage** → **Tags** → add `marshall-gallery`
5. Done! Images appear on the website automatically (no rebuild needed)

### Adding Captions & Locations

In Cloudinary:
1. Select an image
2. Click **Manage** → **Contextual Metadata**
3. Add:
   - `caption`: "Pool Renovation"
   - `location`: "Sandton"
   - `alt`: "Beautiful pool after renovation"
4. Save

### Removing Images

1. In Cloudinary Media Library
2. Select the image
3. Remove the `marshall-gallery` tag, OR delete the image
4. It disappears from the website automatically

---

## Option 2: Local Images (Requires Rebuild)

### Image Requirements
- **Formats**: JPG, JPEG, PNG, WEBP, GIF
- **Recommended size**: 1200x900px (4:3 ratio)
- **Max file size**: 500KB for fast loading
- **Naming**: Any name works, but date-based names (e.g., `20250118_123456.jpg`) will auto-sort newest first

### Editing Gallery Metadata

The gallery data lives in `src/lib/data/gallery.json`. Each image entry looks like:

```json
{
  "src": "/images/gallery/your-image.jpg",
  "alt": "Description for accessibility",
  "caption": "Short title shown on hover",
  "location": "Area name (e.g., Randburg)"
}
```

#### Example: Adding a New Pool Photo

1. Copy `beautiful-pool.jpg` to `static/images/gallery/`
2. Run `npm run update-gallery`
3. Open `src/lib/data/gallery.json`
4. Find your new image and update:
   ```json
   {
     "src": "/images/gallery/beautiful-pool.jpg",
     "alt": "Stunning pool renovation with new tiles and lighting",
     "caption": "Pool Renovation",
     "location": "Sandton"
   }
   ```
5. Run `npm run build`

### Removing Images

1. Delete the image file from `static/images/gallery/`
2. Run `npm run update-gallery` (or manually remove from JSON)
3. Rebuild: `npm run build`

### Reordering Images

Edit `src/lib/data/gallery.json` and rearrange the entries in the `images` array. Images display in the order they appear in the JSON.

---

## Troubleshooting

### Cloudinary images not showing?
1. **Check tag**: Make sure images have the `marshall-gallery` tag
2. **Check cloud name**: Verify `src/lib/cloudinary.js` has correct cloud name
3. **Resource list enabled?**: Settings → Security → Resource list must be enabled
4. **Clear browser cache**: Ctrl+Shift+R

### Local images not showing after build?
1. **Clear browser cache**: Ctrl+Shift+R
2. **Check file exists**: Look in `static/images/gallery/`
3. **Check JSON**: Verify the `src` path matches the actual filename exactly (case-sensitive)

### Gallery not updating (local)?
1. Make sure you ran `npm run update-gallery`
2. Check `src/lib/data/gallery.json` was updated
3. Rebuild with `npm run build`

### Images look stretched/squished?
The gallery uses 4:3 aspect ratio. Crop your images to match, or they'll be cropped automatically to fit.

---

## File Structure

```
MarshallProjects/
├── static/
│   └── images/
│       └── gallery/          ← Drop images here
│           ├── image1.jpg
│           ├── image2.jpg
│           └── ...
├── src/
│   └── lib/
│       └── data/
│           └── gallery.json  ← Gallery metadata (auto-generated)
└── scripts/
    └── update-gallery.js     ← Gallery update script
```

---

## Commands Reference

| Command | What it does |
|---------|--------------|
| `npm run update-gallery` | Scans gallery folder, updates gallery.json |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
