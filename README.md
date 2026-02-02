# Marshall Projects & Aqua-Genie Website

Static single-page website for Marshall Projects & Protective Coatings CC, featuring two service divisions:
- **Aqua-Genie**: Swimming pool maintenance & repairs
- **Marshall Projects**: Handyman & property maintenance

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ LTS
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
# Create static build
npm run build

# Preview production build locally
npm run preview
```

The static build outputs to the `/build` directory, ready for deployment.

## 📁 Project Structure

```
/src
  /lib
    /components          # Reusable Svelte components
      Hero.svelte
      About.svelte
      ServicesAquaGenie.svelte
      ServicesMarshallProjects.svelte
      WhyChooseUs.svelte
      Contact.svelte
      Footer.svelte
      WhatsAppButton.svelte
    /styles
      variables.css      # CSS custom properties for colors
  /routes
    +page.svelte         # Main single-page layout
    +layout.ts           # Static export configuration
  app.html               # HTML template

/static
  /images                # Static assets
    aquagenie-logo.svg   # PLACEHOLDER - replace with actual logo
    marshallprojects-logo.svg  # PLACEHOLDER - replace with actual logo
  favicon.png

svelte.config.js         # SvelteKit config with static adapter
vite.config.js           # Vite configuration
package.json             # Dependencies and scripts
```

## 🎨 Brand Colors

Colors are defined in `/src/lib/styles/variables.css` as CSS custom properties:

### Aqua-Genie (Pool Services)
- Primary: `#2DA9E1` (Aqua Blue)
- Secondary: `#1B6FAE` (Deep Water Blue)
- Accent: `#FFFFFF` (White)

### Marshall Projects (Handyman)
- Primary: `#4A4A4A` (Steel Grey)
- Secondary: `#2F2F2F` (Charcoal)
- Accent: `#E5E5E5` (Light Grey)

### Global
- Background: `#FFFFFF`
- Body Text: `#333333`
- Dividers: `#DDDDDD`

## 🖼️ Replacing Logos

**Current logos are SVG placeholders** - replace them with actual client logos:

1. Prepare logo files:
   - Format: PNG or SVG (PNG recommended for photos, SVG for vector)
   - Dimensions: ~400×150px recommended
   - Background: Transparent or white

2. Replace files:
   ```bash
   # Place new logos in /static/images/
   /static/images/aquagenie-logo.png
   /static/images/marshallprojects-logo.png
   ```

3. Update references in `/src/lib/components/Hero.svelte`:
   ```svelte
   <img src="/images/aquagenie-logo.png" alt="Aqua-Genie Logo" class="logo" />
   <img src="/images/marshallprojects-logo.png" alt="Marshall Projects Logo" class="logo" />
   ```

4. Rebuild:
   ```bash
   npm run build
   ```

## 📧 Contact Form Configuration

The contact form uses **Formspree** for submissions. To activate:

1. Create free Formspree account: https://formspree.io
2. Create new form and get your form ID
3. Update `/src/lib/components/Contact.svelte`:
   ```javascript
   // Line ~20: Replace YOUR_FORM_ID with actual Formspree ID
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

4. Configure Formspree to forward submissions to:
   - `gautengprojects@gmail.com`
   - `aquageniepools@gmail.com`

### Alternative Form Solutions
- **Netlify Forms**: Add `netlify` attribute to `<form>` tag
- **Cloudflare Workers**: Create custom email handler
- **Web3Forms**: Similar to Formspree

## 📱 WhatsApp Integration

WhatsApp click-to-chat is implemented in two places:

1. **Floating button** (bottom-right, always visible)
2. **Contact section** (inline link)

Phone number: `+27 71 484 3047`

To change the number, update `/src/lib/components/WhatsAppButton.svelte`:
```javascript
const whatsappNumber = '27714843047'; // Format: country code + number (no + or spaces)
```

## 🌐 Deployment to Cloudflare Pages

### Initial Deployment

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/marshallprojects.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**:
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Go to **Pages** → **Create a project**
   - Connect your GitHub repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Build output directory**: `build`
     - **Root directory**: `/` (default)

3. **Deploy**:
   - Cloudflare will automatically build and deploy
   - You'll get a URL like: `marshallprojects.pages.dev`

### Custom Domain (marshallprojects.co.za)

1. **In Cloudflare Pages**:
   - Go to your project → **Custom domains**
   - Click **Set up a custom domain**
   - Enter: `marshallprojects.co.za`

2. **Configure DNS**:
   - If domain is registered with Cloudflare:
     - Cloudflare will automatically create DNS records
   - If domain is elsewhere:
     - Add CNAME record:
       ```
       Type: CNAME
       Name: @ (or marshallprojects.co.za)
       Target: marshallprojects.pages.dev
       ```

3. **Wait for propagation** (usually 5-30 minutes)

### Redeploying After Changes

```bash
# Make changes, then commit and push
git add .
git commit -m "Updated content"
git push

# Cloudflare Pages will automatically rebuild and deploy
```

## 🔧 Updating Contact Information

### Email Addresses
Update in two files:

1. `/src/lib/components/Contact.svelte` (Contact section display)
2. Formspree dashboard (form submission destination)

### Phone Number
Update in:
1. `/src/lib/components/Contact.svelte` (click-to-call link)
2. `/src/lib/components/WhatsAppButton.svelte` (WhatsApp link)
3. `/src/lib/components/Footer.svelte` (footer display)

## 🛠️ Technology Stack

- **Framework**: SvelteKit 2.x
- **Adapter**: @sveltejs/adapter-static (SPA mode)
- **Build Tool**: Vite
- **Hosting**: Cloudflare Pages
- **Form Handling**: Formspree (or alternatives)

### Why SvelteKit?
- Lightweight and fast (smaller bundles than React)
- Clean component structure
- Built-in static site generation
- Easy to maintain long-term
- Perfect for single-page sites

## 📄 Available Scripts

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Create production build
npm run preview  # Preview production build locally
```

## 🐛 Troubleshooting

### Build fails with "adapter not found"
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Images not showing
- Check file paths are correct: `/images/filename.ext`
- Ensure files are in `/static/images/` directory
- Rebuild: `npm run build`

### Form submissions not working
- Verify Formspree form ID is correct
- Check browser console for errors
- Test with Formspree's test mode first

### WhatsApp button not working on iOS
- Ensure number format is correct (no spaces, + or hyphens)
- Format: `27714843047` (country code + number)

## 📞 Support

For technical questions about the website:
- Check SvelteKit docs: https://kit.svelte.dev
- Check Cloudflare Pages docs: https://developers.cloudflare.com/pages

For business enquiries:
- Email: gautengprojects@gmail.com
- Phone: +27 (0)71 484 3047

## 📝 License

© Marshall Projects & Protective Coatings CC. All rights reserved.
