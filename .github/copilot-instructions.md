# Marshall Projects & Aqua-Genie Website - AI Agent Instructions

## Project Overview
Static, single-page informational website for a dual-brand service business:
- **Aqua-Genie**: Swimming pool maintenance & repairs
- **Marshall Projects**: Handyman & property maintenance services

**Target Audience**: Residential homeowners in Gauteng, South Africa  
**Purpose**: Informational + contact enquiry (no e-commerce, no CMS, no user accounts)

## Architecture Decisions

### Technology Stack (Confirmed)
- **Framework**: SvelteKit with static adapter (@sveltejs/adapter-static)
- **Must be static**: Static build only - no SSR, no backend
- **Hosting**: Cloudflare Pages (GitHub Pages acceptable as fallback)
- **Domain**: marshallprojects.co.za (DNS to be pointed after delivery)
- **Form handling**: Use Formspree, Netlify Forms, or Cloudflare Workers (no custom backend)
- **Why SvelteKit**: Lightweight, clean components, easy maintenance, perfect for single-page static sites

### Site Structure
Single-page layout with scrolling sections:
1. Hero/Header (dual-brand logos + tagline)
2. Services Overview (split: Aqua-Genie vs Marshall Projects)
3. Why Choose Us (trust/value proposition)
4. Contact Section (form + direct contact details)
5. Footer (business info + copyright)

## Critical Requirements

### Contact Form (Must-Have)
- Fields: Full Name, Phone, Email, Service Type (dropdown: Pool/Handyman/Other), Message
- Submissions → Email to: `gautengprojects@gmail.com` and `aquageniepools@gmail.com`
- Show "Thank you" confirmation after submission
- No database storage required

### WhatsApp Integration (Required)
- **Floating button**: Bottom-right corner with WhatsApp icon
- **Number**: +27 71 484 3047
- **Link format**: `https://wa.me/27714843047`
- **Pre-filled message**: "Hello, I'd like to enquire about your services."
- **Also include**: WhatsApp link in Contact section alongside phone/email

### Design Constraints
- **Mobile-first responsive design** (60%+ users on mobile)
- **Brand Colors** (Locked):
  - **Aqua-Genie**: Primary #2DA9E1 (Aqua Blue), Secondary #1B6FAE (Deep Water Blue), Accent #FFFFFF
  - **Marshall Projects**: Primary #4A4A4A (Steel Grey), Secondary #2F2F2F (Charcoal), Accent #E5E5E5
  - **Global**: Background #FFFFFF, Body Text #333333, Dividers #DDDDDD
- **Aesthetic**: Clean, professional, "trade services" feel (avoid fancy animations)
- **Accessibility**: High contrast, readable fonts (16px+ body text), clear section breaks

### Logo Handling
- Aqua-Genie logo: Top-left or hero section
- Marshall Projects logo: Top-right or adjacent to Aqua-Genie
- **Use placeholder images** until client provides logos (clearly label placeholders)

### SEO Basics (Minimal)
- Page title: "Pool & Home Maintenance Gauteng | Aqua-Genie & Marshall Projects"
- Meta description with local keywords (e.g., "pool maintenance Gauteng", "handyman Johannesburg")
- Proper H1-H3 hierarchy, Open Graph tags
- No blog or advanced SEO tooling needed

## Development Workflow

### Plan-First Approach (Required)
Before making ANY changes:
1. **Analyze**: Review existing code structure and identify what needs modification
2. **Explain**: Describe your planned approach, file changes, and potential issues
3. **Clarify**: Ask questions about unclear requirements—do NOT make assumptions
4. **Execute**: Only proceed after confirming the plan

### Key Commands (SvelteKit Static Site)
- **Install dependencies**: `npm install`
- **Dev server**: `npm run dev` (typically http://localhost:5173)
- **Build**: `npm run build` (outputs to `/build` directory)
- **Preview build**: `npm run preview`
- **Deploy**: Push to GitHub → auto-deploy via Cloudflare Pages
- **Adapter**: Ensure `@sveltejs/adapter-static` is configured in `svelte.config.js`

### Testing Checklist
Before marking work complete:
- [ ] Mobile responsiveness (test at 320px, 768px, 1024px widths)
- [ ] Contact form submits successfully (test with real email)
- [ ] All links work (phone: click-to-call, email: mailto:, optional WhatsApp)
- [ ] Fast load time (no large images >500KB, minify CSS/JS if needed)
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)

## Content Guidelines

### Tone & Messaging
- **Trustworthy, practical, no marketing fluff**
- Focus on reliability, local service, one-stop solution
- Example: "Reliable residential maintenance you can trust" ✅ vs "Revolutionary cutting-edge solutions" ❌

### Service Lists (Must Include)
**Aqua-Genie**: Pool maintenance, repairs, green-to-clean, lighting, filter sand changes, covers, pumps, solar heating, heat pumps  
**Marshall Projects**: Painting, roofing, flooring, damp proofing, waterproofing, electrical, plumbing, tiling, building maintenance, decor (blinds/curtains), decking, solar panel cleaning

## Out of Scope (Explicit No-Go)
- ❌ CMS or admin panel
- ❌ User accounts or authentication
- ❌ E-commerce or payment processing
- ❌ Backend server or API
- ❌ Complex animations or parallax effects
- ❌ Social media feeds or integration (optional social links OK)

## Deliverables
1. Complete SvelteKit static site source code
2. Deployed version to Cloudflare Pages (preview URL)
3. README.md with instructions for:
   - Updating contact email addresses
   - Replacing logo images
   - Pointing custom domain (marshallprojects.co.za)
   - Redeploying to Cloudflare Pages
4. Project structure documentation:
   - Component organization
   - Color variable usage
   - Form handler configuration

## Project Structure (SvelteKit)
```
/src
  /routes
    +page.svelte        # Main single-page layout
    +layout.svelte      # Global layout/metadata
  /lib
    /components         # Reusable components (Hero, Services, Contact, etc.)
  /static
    /images            # Logos, placeholders, icons
    favicon.png
svelte.config.js       # Must use adapter-static
package.json
```
