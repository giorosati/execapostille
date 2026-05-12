# GitHub Pages Deployment Guide

## Quick Start (5 minutes)

This repository is now configured for GitHub Actions deployment to GitHub Pages.

### Step 1: Push code to GitHub
In your terminal/PowerShell:

```powershell
cd c:\Users\Giovanni\code\execapostille_website

# Initialize git repo
git init
git add .
git commit -m "Initial commit: Exec Apostille coming soon website"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/execapostille.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Configure GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. Scroll to **Pages** section (left sidebar)
4. Confirm "Deploy from a branch" is selected
5. Branch should be set to `main` and `/root`
6. Save

### Step 4: Configure Custom Domain
1. In **Pages** settings, scroll to "Custom domain"
2. Enter: `execapostille.com`
3. Click **Save**
4. GitHub creates a CNAME file automatically

### Step 5: Point Domain to GitHub
Contact your domain registrar (GoDaddy, Namecheap, etc.):

**Option A: Using A Records** (Recommended)
Add these DNS A records:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Option B: Using CNAME**
Add a CNAME record pointing to: `YOUR_USERNAME.github.io`

### Step 6: Wait for SSL Certificate
- GitHub automatically provisions an SSL certificate
- Takes 5-15 minutes
- You'll see a checkmark in Pages settings when ready
- Website will be live at `https://execapostille.com`

---

## Testing Before Domain Setup

To test locally before going live:

```powershell
# Start local server (requires Python 3)
python -m http.server 8000

# Visit: http://localhost:8000
```

---

## Making Updates

After setup, any changes are automatic:

```powershell
# Edit files locally
# Then commit and push

git add .
git commit -m "Update content or styling"
git push
```

Changes typically go live within 1-2 minutes.

---

## Troubleshooting

### "Domain not loading"
- Wait 15-30 minutes for DNS propagation
- Clear your browser cache (Ctrl+Shift+Delete)
- Try in incognito mode

### "SSL certificate not provisioning"
- Ensure CNAME file is in repository root
- Verify domain is correctly configured in DNS
- Check GitHub Pages settings show your domain

### "404 error on GitHub Pages"
- Ensure index.html is in root folder
- Check Pages settings show correct branch/folder
- Rebuild by pushing a small change

---

## Helpful Links

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub DNS Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Domain Registrar Help](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

---

## Support & Next Steps

Once live, consider:
- ✅ Monitor email signups (update form to store data)
- ✅ Add Google Analytics
- ✅ Set up contact form backend
- ✅ Plan full website content for launch

Good luck! 🚀
