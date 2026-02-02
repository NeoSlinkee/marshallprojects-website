# ⚡ Quick Reference Card

## 🚀 Essential Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
```

## 📁 Key Files to Edit

| File | Purpose |
|------|---------|
| `src/lib/components/Contact.svelte` | Contact form & details |
| `src/lib/components/Hero.svelte` | Top section with logos |
| `src/lib/styles/variables.css` | Colors |
| `static/images/` | Logo files |

## 🎨 Brand Colors (Hex Codes)

### Aqua-Genie
- **Primary**: `#2DA9E1`
- **Secondary**: `#1B6FAE`
- **Accent**: `#FFFFFF`

### Marshall Projects
- **Primary**: `#4A4A4A`
- **Secondary**: `#2F2F2F`
- **Accent**: `#E5E5E5`

## 📧 Contact Information

**Phone**: +27 (0)71 484 3047  
**Email 1**: gautengprojects@gmail.com  
**Email 2**: aquageniepools@gmail.com  
**WhatsApp**: https://wa.me/27714843047

## 🔴 Before Launch Checklist

- [ ] Replace logos in `/static/images/`
- [ ] Configure Formspree form ID
- [ ] Test form submission
- [ ] Test WhatsApp button on mobile
- [ ] Test on multiple browsers
- [ ] Push to GitHub
- [ ] Deploy to Cloudflare Pages
- [ ] Configure custom domain

## 🌐 Deployment

### GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/marshallprojects.git
git push -u origin main
```

### Cloudflare Pages
1. Connect GitHub repo
2. Build command: `npm run build`
3. Output directory: `build`
4. Deploy!

### Custom Domain
Add CNAME record:
```
Type: CNAME
Name: @
Target: your-site.pages.dev
```

## 📞 Emergency Contacts

**Formspree Support**: https://help.formspree.io  
**Cloudflare Support**: https://support.cloudflare.com  
**SvelteKit Docs**: https://kit.svelte.dev

## 🛠️ Common Tasks

### Update Service List
Edit: `src/lib/components/ServicesAquaGenie.svelte` or `ServicesMarshallProjects.svelte`

### Change Phone Number
Update in 3 files:
- `Contact.svelte`
- `WhatsAppButton.svelte`
- `Footer.svelte`

### Change Colors
Edit: `src/lib/styles/variables.css`

### Replace Logos
Place new files in: `/static/images/`
- `aquagenie-logo.png` (or .svg)
- `marshallprojects-logo.png` (or .svg)

## 📊 Project Stats

**Components**: 8  
**Bundle Size**: ~27 KB (gzipped: ~10 KB)  
**Build Time**: ~1.3 seconds  
**Dependencies**: 4 main packages  

## 🎯 Site Sections (In Order)

1. Hero (Logos + Tagline)
2. About (Company Overview)
3. Aqua-Genie Services
4. Marshall Projects Services
5. Why Choose Us
6. Contact Form & Details
7. Footer
8. WhatsApp Button (Floating)

---

**Quick Tip**: Keep this file handy for day-to-day maintenance!
