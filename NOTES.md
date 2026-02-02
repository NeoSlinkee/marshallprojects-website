# 📝 Important Notes & Reminders

## 🔴 Before Going Live

### Critical Tasks
1. **Replace Placeholder Logos**
   - Current logos are SVG placeholders with text
   - Files: `/static/images/aquagenie-logo.svg` and `marshallprojects-logo.svg`
   - Replace with actual client-provided logos
   - Update file extensions in `Hero.svelte` if needed (`.png` vs `.svg`)

2. **Configure Contact Form**
   - Formspree form ID in `Contact.svelte` is set to `YOUR_FORM_ID`
   - Must be updated with real Formspree form ID
   - Configure email forwarding to both addresses in Formspree dashboard

3. **Test All Functionality**
   - Contact form submission → emails arrive
   - WhatsApp button opens chat app
   - Click-to-call phone links work on mobile
   - All links function correctly

---

## 📧 Contact Information

### Email Addresses (2 locations)
- **Display**: `/src/lib/components/Contact.svelte`
- **Form destination**: Formspree dashboard configuration

Current addresses:
- `gautengprojects@gmail.com`
- `aquageniepools@gmail.com`

### Phone Numbers (3 locations)
- **Contact section**: `/src/lib/components/Contact.svelte`
- **WhatsApp button**: `/src/lib/components/WhatsAppButton.svelte`
- **Footer**: `/src/lib/components/Footer.svelte`

Current number: `+27 (0)71 484 3047`

---

## 🎨 Brand Colors

All colors defined in: `/src/lib/styles/variables.css`

### Aqua-Genie
- `--aqua-primary: #2DA9E1` (Aqua Blue)
- `--aqua-secondary: #1B6FAE` (Deep Water Blue)
- `--aqua-accent: #FFFFFF` (White)

### Marshall Projects
- `--mp-primary: #4A4A4A` (Steel Grey)
- `--mp-secondary: #2F2F2F` (Charcoal)
- `--mp-accent: #E5E5E5` (Light Grey)

### Global
- `--bg-main: #FFFFFF`
- `--text-main: #333333`
- `--divider: #DDDDDD`

**To change colors**: Edit values in `variables.css` and rebuild

---

## 🏗️ Architecture Decisions

### Why SvelteKit?
- Lightweight framework (smaller than React)
- Fast page loads (important for service businesses)
- Clean component structure
- Easy maintenance for non-technical updates
- Perfect for single-page static sites

### Why Static Build?
- **No server needed**: Cheaper hosting
- **Better security**: No backend vulnerabilities
- **Faster loading**: Pre-rendered HTML
- **Better SEO**: Content immediately available
- **Reliable**: No database or server dependencies

### Why Cloudflare Pages?
- Free hosting for static sites
- Automatic HTTPS/SSL
- Global CDN (fast worldwide)
- Auto-deploy from Git
- Easy custom domain setup
- Excellent DDoS protection

---

## 📁 Key Files Reference

### Configuration
- `svelte.config.js` - Static adapter configuration
- `vite.config.js` - Build tool configuration
- `tsconfig.json` - TypeScript settings
- `package.json` - Dependencies and scripts

### Layout & Routing
- `src/app.html` - HTML template
- `src/routes/+layout.ts` - Static export config
- `src/routes/+page.svelte` - Main page (assembles all components)

### Styling
- `src/lib/styles/variables.css` - Global colors and base styles

### Components (All in `src/lib/components/`)
- `Hero.svelte` - Top section with logos and tagline
- `About.svelte` - Company overview
- `ServicesAquaGenie.svelte` - Pool services list
- `ServicesMarshallProjects.svelte` - Handyman services list
- `WhyChooseUs.svelte` - Value propositions
- `Contact.svelte` - Contact details and form
- `Footer.svelte` - Bottom section
- `WhatsAppButton.svelte` - Floating button (bottom-right)

---

## 🔧 Common Modifications

### Adding a New Service
1. Edit relevant component (`ServicesAquaGenie.svelte` or `ServicesMarshallProjects.svelte`)
2. Add item to `services` array
3. Rebuild: `npm run build`
4. Push to GitHub (auto-deploys)

### Changing Content
- All content is in component files (`.svelte`)
- Edit text directly in the components
- Rebuild and push to deploy

### Adding a New Section
1. Create component: `src/lib/components/NewSection.svelte`
2. Import in `src/routes/+page.svelte`
3. Add `<NewSection />` in desired position
4. Rebuild and deploy

---

## ⚠️ What NOT to Do

### Don't Add These Features
- ❌ Backend server or API
- ❌ Database
- ❌ User authentication/login
- ❌ E-commerce or payments
- ❌ CMS or admin panel
- ❌ Complex animations (performance impact)

**Why?** This is a static informational site optimized for:
- Fast loading
- Easy maintenance
- Low/no hosting costs
- Maximum uptime
- Security

### Don't Modify These Files (Without Understanding)
- `svelte.config.js` - Required for static builds
- `.svelte-kit/` - Auto-generated (in .gitignore)
- `build/` - Build output (in .gitignore)

---

## 📱 Mobile-First Design

Site is designed mobile-first because:
- 60%+ of visitors use mobile devices
- Google prioritizes mobile-friendly sites (SEO)
- Service business customers often search on-the-go

**Breakpoint**: 768px (tablets and below)

Test responsiveness:
- Chrome DevTools → Device toolbar
- Test on actual devices
- Check both portrait and landscape

---

## 🔍 SEO Basics

Current SEO setup (in `+page.svelte`):
- **Title**: "Pool & Home Maintenance Gauteng | Aqua-Genie & Marshall Projects"
- **Meta description**: Includes local keywords
- **Open Graph tags**: For social media sharing
- **Semantic HTML**: Proper heading hierarchy

Local keywords included:
- "pool maintenance Gauteng"
- "handyman Johannesburg"
- "pool repairs"
- "home maintenance"
- "property services"

**To improve SEO**:
- Get listed on Google Business Profile
- Build local citations (directories)
- Request customer reviews
- Create blog content (future enhancement)

---

## 🐛 Known Issues / Future Enhancements

### Current Limitations
1. **Form**: Requires Formspree (3rd party)
   - Alternative: Implement Cloudflare Workers email handler
   
2. **No image gallery**: Intentional (keeps site fast)
   - Could add lightbox gallery in future

3. **No testimonials section**: Not in initial brief
   - Easy to add later if needed

4. **No service area map**: Not requested
   - Could add Google Maps embed if useful

### Potential Future Additions
- Customer testimonials section
- Before/after photo gallery
- Service area map
- FAQ section
- Blog for SEO (requires different approach)

---

## 📞 Emergency Contact

If site goes down or has issues:

1. **Check Cloudflare Pages status**: Status page for outages
2. **Check build logs**: Cloudflare dashboard → Deployments
3. **Rollback if needed**: Cloudflare dashboard → Previous deployment
4. **DNS issues**: Use dnschecker.org to verify propagation

---

## 📚 Documentation Links

- **SvelteKit**: https://kit.svelte.dev/docs
- **Cloudflare Pages**: https://developers.cloudflare.com/pages
- **Formspree**: https://help.formspree.io
- **Svelte**: https://svelte.dev/docs

---

## ✅ Pre-Launch Checklist

- [ ] All placeholder content replaced with real content
- [ ] Both logos replaced with actual client logos
- [ ] Formspree configured and tested
- [ ] All contact information verified (phone, email)
- [ ] WhatsApp button tested on mobile
- [ ] Mobile responsiveness tested on real devices
- [ ] Cross-browser testing complete
- [ ] Custom domain connected and working
- [ ] SSL certificate active
- [ ] Form submission sends to correct emails
- [ ] All links tested (internal and external)
- [ ] Favicon displays correctly

---

**Last Updated**: February 2026
