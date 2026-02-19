# Image Assets Guide

This folder contains all images used on the Marshall Projects & Aqua-Genie website.

## Folder Structure

```
/images
├── hero/
│   └── hero-pool.jpg                # Main hero background image
├── gallery/
│   ├── pool-1.jpg to pool-9.jpg    # Gallery images with captions
├── services/
│   ├── pool-maintenance.jpg         # Pool Maintenance card
│   ├── pool-repairs.jpg             # Pool Repairs card
│   ├── pool-refurbishment.jpg       # Pool Refurbishments card
│   ├── pool-heating.jpg             # Pool Heating card
│   ├── pump-installation.jpg        # Pump Installations card
│   ├── filter-sand.jpg              # Filter Sand Changes card
│   ├── painting.jpg                 # Interior & Exterior Painting
│   ├── waterproofing.jpg            # Waterproofing card
│   ├── damp-proofing.jpg            # Damp Proofing card
│   ├── roofing.jpg                  # Roofing Maintenance card
│   ├── building-maintenance.jpg     # General Building Maintenance
│   └── flooring.jpg                 # Flooring Installation & Repairs
├── misc/
│   ├── worker-hands.jpg             # Background for "Why Choose Us"
│   └── dual-service.jpg             # Mid-page visual split section
├── maps/
│   └── gauteng-service-area.jpg     # Areas We Serve map image
├── aquagenie-logo.svg               # Aqua-Genie brand logo
├── marshallprojects-logo.svg        # Marshall Projects brand logo
└── favicon.png                      # Browser tab icon
```

## How to Replace Images

### Step 1: Prepare Your Images

**Recommended specifications:**

| Image | Dimensions | Format | Max Size |
|-------|------------|--------|----------|
| Hero background | 1920×1080px | JPG | 300KB |
| Gallery images | 800×600px | JPG | 150KB |
| Service images | 800×600px | JPG | 150KB |
| Misc/background | 1200×800px | JPG | 200KB |
| Logos | Vector | SVG | 50KB |
| Favicon | 512×512px | PNG | 20KB |

**Tips for optimization:**
- Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/) to compress images
- Save JPGs at 80% quality for web
- Ensure images are landscape orientation for best display

### Step 2: Name Your Files Correctly

Keep the **exact same filenames** as the placeholders. Simply replace the placeholder files with your actual images:

- `hero-pool.jpg` → Your sparkling pool photo
- `pool-1.jpg` through `pool-6.jpg` → Your best project photos
- `aquagenie-logo.svg` → Your Aqua-Genie logo
- `marshallprojects-logo.svg` → Your Marshall Projects logo

### Step 3: Upload to Repository

Replace the placeholder files in the appropriate folders and commit:

```bash
git add static/images/
git commit -m "Add real images"
git push
```

Cloudflare Pages will automatically rebuild and deploy.

## Image Recommendations by Section

### Hero Background (`hero-pool.jpg`)
- High-quality pool photo with crystal blue water
- Good lighting, preferably morning/afternoon
- Shows well-maintained pool and surroundings
- Works well with blue overlay gradient

### Gallery Images (`pool-1.jpg` to `pool-6.jpg`)
- Before/after transformations
- Close-ups of quality workmanship
- Variety of pool types and services
- "Green to clean" transformations are impactful

### Service Section (`pool-maintenance.jpg`, `handyman-work.jpg`)
- Action shots of work being done
- Tools of the trade
- Professional appearance

### Background Image (`worker-hands.jpg`)
- Hands performing skilled work
- Tools, equipment in use
- Works with dark overlay (mostly obscured)

### Logos
- SVG format preferred (scalable)
- If only PNG available, use transparent background
- Minimum 200×200px for PNG

## Placeholder Fallbacks

The site is designed to gracefully handle missing images:
- Gallery shows placeholder cards with captions
- Hero section maintains gradient if image fails
- Logo areas show white boxes if logos missing

No code changes needed - just replace the files!

## Questions?

Contact the developer for assistance with image preparation or upload.
