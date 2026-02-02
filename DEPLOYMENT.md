# 🚀 Deployment Guide - Cloudflare Pages

## Quick Deployment Checklist

### Before Deployment
- [ ] Replace placeholder logos in `/static/images/`
- [ ] Configure Formspree form ID in `Contact.svelte`
- [ ] Test locally: `npm run dev`
- [ ] Build successfully: `npm run build`
- [ ] Preview works: `npm run preview`

---

## Step 1: Push to GitHub

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial Marshall Projects website"

# Create GitHub repository (via GitHub web interface)
# Then connect and push:
git remote add origin https://github.com/YOUR_USERNAME/marshallprojects.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Cloudflare Pages

### 2.1 Connect Repository

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages** → **Pages**
3. Click **Create a project** → **Connect to Git**
4. Authorize Cloudflare to access your GitHub account
5. Select repository: `marshallprojects`

### 2.2 Configure Build Settings

**Framework preset**: SvelteKit  
**Build command**: `npm run build`  
**Build output directory**: `build`  
**Root directory**: `/` (leave blank)  
**Environment variables**: None required

### 2.3 Deploy

- Click **Save and Deploy**
- Cloudflare will build and deploy (takes 1-3 minutes)
- You'll get a preview URL like: `https://marshallprojects-abc.pages.dev`

---

## Step 3: Add Custom Domain

### 3.1 In Cloudflare Pages

1. Go to your project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter: `marshallprojects.co.za`
4. Click **Continue**

### 3.2 Configure DNS

**If domain is managed in Cloudflare:**
- Cloudflare will automatically create the required CNAME record
- Wait 5-10 minutes for DNS propagation

**If domain is managed elsewhere:**
- Add the following DNS record at your domain registrar:
  ```
  Type: CNAME
  Name: @ (or marshallprojects.co.za)
  Target: marshallprojects-abc.pages.dev (use your actual .pages.dev URL)
  TTL: Auto or 3600
  ```
- Wait 15-60 minutes for DNS propagation

### 3.3 Verify

- Visit `https://marshallprojects.co.za`
- Should show your site with SSL certificate (automatic)

---

## Step 4: Configure Form Submissions

### 4.1 Set Up Formspree

1. Create account at [https://formspree.io](https://formspree.io)
2. Create new form: "Marshall Projects Contact"
3. Copy your form ID (looks like: `xpzgabcd`)

### 4.2 Update Code

Edit `/src/lib/components/Contact.svelte`:

```javascript
// Line ~20 - Replace YOUR_FORM_ID
const response = await fetch('https://formspree.io/f/xpzgabcd', {
```

### 4.3 Configure Email Recipients

In Formspree dashboard:
- Go to form settings
- Add notification emails:
  - `gautengprojects@gmail.com`
  - `aquageniepools@gmail.com`

### 4.4 Deploy Update

```bash
git add src/lib/components/Contact.svelte
git commit -m "Configure Formspree form"
git push
```

Cloudflare Pages will automatically rebuild and deploy.

---

## Ongoing Maintenance

### Making Content Updates

```bash
# Edit files locally
# Test changes
npm run dev

# Build and preview
npm run build
npm run preview

# Commit and push
git add .
git commit -m "Description of changes"
git push

# Cloudflare automatically deploys
```

### Replacing Logos

1. Place new logo files in `/static/images/`:
   - `aquagenie-logo.png` (or `.svg`)
   - `marshallprojects-logo.png` (or `.svg`)

2. Update `/src/lib/components/Hero.svelte` if file extensions changed

3. Rebuild and deploy:
   ```bash
   npm run build
   git add .
   git commit -m "Update logos"
   git push
   ```

### Rollback to Previous Version

In Cloudflare Pages dashboard:
1. Go to **Deployments** tab
2. Find previous working deployment
3. Click **⋮** menu → **Rollback to this deployment**

---

## Troubleshooting

### Build Fails in Cloudflare

**Check build logs** in Cloudflare Pages dashboard

Common fixes:
- Ensure Node.js version is 18+
- Verify `package.json` has all dependencies
- Check for syntax errors: `npm run build` locally

### Custom Domain Not Working

- Verify DNS records are correct
- Check DNS propagation: https://dnschecker.org
- Ensure CNAME points to correct `.pages.dev` URL
- Wait up to 1 hour for full propagation

### Form Not Submitting

- Check browser console for errors
- Verify Formspree form ID is correct
- Test form in Formspree dashboard first
- Check spam folder for test submissions

---

## Security Notes

- SSL/HTTPS is automatic with Cloudflare Pages
- No sensitive data stored (static site)
- Form submissions handled by Formspree (secure)
- WhatsApp links open external app (no data shared)

---

## Support Resources

- **Cloudflare Pages Docs**: https://developers.cloudflare.com/pages
- **SvelteKit Docs**: https://kit.svelte.dev
- **Formspree Docs**: https://help.formspree.io

---

## Post-Deployment Checklist

- [ ] Site loads at custom domain: `marshallprojects.co.za`
- [ ] SSL certificate is active (https://)
- [ ] All images display correctly
- [ ] Contact form submits successfully
- [ ] Test email received at both addresses
- [ ] WhatsApp button opens chat correctly
- [ ] Mobile responsive on phone/tablet
- [ ] Test on multiple browsers (Chrome, Safari, Firefox)
- [ ] Click-to-call phone links work on mobile
- [ ] Scroll behavior is smooth

---

**Deployment Complete!** 🎉

Your site is now live at: `https://marshallprojects.co.za`
