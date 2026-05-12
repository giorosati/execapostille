# Exec Apostille - Coming Soon Website

A professional, one-page coming soon website for Exec Apostille services, featuring flags of all Hague Convention member countries.

## Features

- **Professional Design**: Modern, welcoming aesthetic with gradient colors
- **Responsive Layout**: Fully mobile-responsive and works on all devices
- **Hague Convention Countries**: Displays flags of 150+ signatory nations
- **Email Signup**: Collect visitor emails for launch notifications
- **Efficient Performance**: Lightweight HTML/CSS/JavaScript - no dependencies
- **GitHub Pages Ready**: Deploy directly to GitHub Pages hosting

## File Structure

```
execapostille_website/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # Interactive functionality
└── README.md       # This file
```

## Deployment to GitHub Pages

### Option 1: Using GitHub Pages with execapostille.com Domain

1. **Create a GitHub repository** named `execapostille.github.io` (or your preferred name)

2. **Add your custom domain**:
   - Go to your repository Settings → Pages
   - Under "Custom domain", enter `execapostille.com`
   - Create a `CNAME` file in your repository root with one line: `execapostille.com`

3. **Push these files** to your GitHub repository:
   ```bash
   git add .
   git commit -m "Initial commit: coming soon website"
   git push origin main
   ```

4. **Configure your domain registrar**:
   - Point your DNS records to GitHub Pages servers:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or use CNAME: `<username>.github.io`

5. **Wait for SSL certificate**: GitHub automatically provisions an SSL certificate (takes a few minutes)

### Option 2: Quick Local Testing

To test the website locally before deployment:

1. Open `index.html` in a web browser
2. Or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```
3. Visit `http://localhost:8000`

## Customization

### Change Colors
Edit `:root` variables in `styles.css`:
```css
:root {
    --primary-color: #0066cc;      /* Main blue */
    --secondary-color: #00a86b;    /* Green */
    --accent-color: #ff9500;        /* Orange */
}
```

### Update Contact Email
In `index.html`, update:
```html
<a href="mailto:info@execapostille.com" class="contact-button">Email Us</a>
```

### Modify Content
Edit text in `index.html` sections:
- Hero section: Main headline and description
- Features section: Three service highlights
- Contact section: Email and messaging

### Add More Functionality
The `script.js` file handles flag loading and email signup. You can extend it to:
- Store emails to a backend service
- Add more interactive elements
- Track analytics

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Size**: ~50KB total (HTML + CSS + JS)
- **Load Time**: < 1 second on typical connections
- **No dependencies**: Pure HTML/CSS/JavaScript
- **SEO friendly**: Semantic HTML structure

## Future Enhancements

Consider adding later:
- Service details and pricing page
- Blog/updates section
- Contact form with backend
- Multi-language support
- Service request form

## Support

For questions or issues, contact: info@execapostille.com

---

**Last Updated**: May 2026
**Status**: Coming Soon
