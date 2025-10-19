# Yummy Time Deli Website To-Do List

## Immediate Priorities

### Git & Cleanup
- [ ] **Clean untracked files:** Review and commit or remove untracked files (GEMINI.md, config.json, new src/, etc.)
- [ ] **Remove deleted files:** Clean up deleted files from git (public/app.js, public/index.html, public/styles.css, etc.)
- [ ] **Commit current changes:** Stage and commit all the modified files in working directory

### Development Environment
- [ ] **Install dependencies:** Run `npm install` to ensure all packages are installed
- [ ] **Test dev server:** Run `npm run dev` to ensure Vite server starts correctly
- [ ] **Test build:** Run `npm run build` to verify production build works
- [ ] **Fix linting:** Run `npm run lint` and address any errors

### Configuration & Data
- [ ] **Verify config.json:** Update placeholder URLs in `config.json` with actual ordering platform links
- [ ] **Populate menu data:** Ensure `src/data/menu.json` has complete and accurate menu items
- [ ] **Regenerate QR codes:** Run `python scripts/gen_qr_codes.py` after config updates
- [ ] **Regenerate menu PDF:** Run `python scripts/gen_menu_pdf.py` to create updated menu

## Content & Design

### Images & Assets
- [ ] **Optimize images:** Compress all images in `/public/assets/images/` for web performance
- [ ] **Add food photos:** Include high-quality photos of popular menu items
- [ ] **Create favicon variants:** Ensure favicon.ico and apple-touch-icon.png are optimized
- [ ] **Gallery images:** Add actual deli photos to ImageGallery component

### Pages & Components
- [ ] **Complete About page:** Replace placeholder content with real deli story and information
- [ ] **Add hours of operation:** Display business hours prominently on homepage
- [ ] **Add location map:** Embed Google Maps showing 2142 Forest Avenue location
- [ ] **Menu sections:** Review menu categories and ensure logical organization

### Responsiveness
- [x] **Mobile-first design:** Tailwind utilities are mobile-first
- [ ] **Test on mobile devices:** Verify cart drawer, menu search, and navigation work on phones
- [ ] **Test on tablets:** Ensure layout adapts properly for tablet screen sizes
- [ ] **Test on desktop:** Verify wide-screen layout is optimal

## Functionality

### Cart & Ordering
- [x] **Cart functionality:** Working with localStorage persistence
- [x] **Item notes:** Shift-click to add notes feature implemented
- [ ] **Integrate real ordering:** Replace mailto: demo with actual ordering system integration
  - Options: Custom backend, third-party service (ChowNow, GloriaFood), or direct platform links
- [ ] **Add delivery options:** Include pickup vs delivery selection
- [ ] **Tax calculation:** Add sales tax calculation to cart totals

### Contact & Communication
- [ ] **Connect contact form:** Integrate ContactForm.jsx with email service (FormSpree, EmailJS, or custom backend)
- [ ] **Add form validation:** Client-side validation for name, email, message fields
- [ ] **Success/error messages:** Show user feedback after form submission
- [ ] **Phone click-to-call:** Make phone number (718)-887-0178 clickable on mobile

### Social Media Integration
- [ ] **Verify social links:** Ensure URLs in config.json point to actual social media profiles
- [ ] **Add social sharing:** Allow users to share menu items or site on social media
- [ ] **Instagram feed:** Consider embedding Instagram feed showing food photos

## Technical & SEO

### Performance
- [ ] **Lazy load images:** Implement lazy loading for menu item images
- [ ] **Code splitting:** Review Vite build for optimal code splitting
- [ ] **PWA features:** Consider adding service worker for offline menu viewing
- [ ] **Bundle analysis:** Use `vite-plugin-bundle-visualizer` to check bundle size

### SEO & Metadata
- [ ] **Update sitemap.xml:** Add /about route and update lastmod dates
- [ ] **Meta descriptions:** Add unique meta descriptions to each page
- [ ] **Open Graph tags:** Add OG tags for better social media sharing previews
- [ ] **Structured data:** Verify LocalBusiness JSON-LD schema is complete
- [ ] **Alt text:** Add descriptive alt text to all images

### Accessibility
- [ ] **ARIA labels:** Add proper ARIA labels to interactive elements (cart drawer, buttons)
- [ ] **Keyboard navigation:** Test full keyboard navigation through menu and cart
- [ ] **Color contrast:** Verify WCAG AA compliance for all text/background combinations
- [ ] **Screen reader testing:** Test with screen reader (VoiceOver, NVDA)
- [ ] **Focus indicators:** Ensure visible focus states for all interactive elements

### Browser Testing
- [ ] **Chrome/Edge:** Test on Chromium-based browsers
- [ ] **Firefox:** Test on Firefox
- [ ] **Safari:** Test on Safari (especially iOS Safari)
- [ ] **Test localStorage:** Verify cart persistence across browser sessions

## Deployment

### Pre-Deployment
- [ ] **Environment variables:** Set up environment variables for production
- [ ] **Analytics:** Add Google Analytics or privacy-friendly alternative
- [ ] **Error tracking:** Consider adding Sentry or similar error tracking
- [ ] **Test production build:** Run `npm run preview` and thoroughly test

### Deploy to Vercel
- [ ] **Create Vercel account:** Sign up at vercel.com
- [ ] **Connect repository:** Link GitHub repo to Vercel
- [ ] **Configure build settings:** Ensure Vite build commands are set
- [ ] **Add custom domain:** Point yummytimedelinyc.com to Vercel
- [ ] **SSL certificate:** Verify HTTPS is enabled

### Post-Deployment
- [ ] **Update Google Business:** Add website URL to Google Business Profile
- [ ] **Submit to Google:** Submit sitemap to Google Search Console
- [ ] **Test live site:** Verify all features work on production URL
- [ ] **Monitor performance:** Check Lighthouse scores and Core Web Vitals
- [ ] **Share with owner:** Get feedback from deli owner

## Marketing & Growth

### Google Business Profile
- [ ] **Verify listing:** Claim and verify 2142 Forest Avenue location
- [ ] **Upload photos:** Add interior, exterior, and food photos
- [ ] **Add business hours:** Keep hours updated
- [ ] **Enable messaging:** Turn on Google Business messaging
- [ ] **Post updates:** Regularly post specials and updates

### QR Codes & Print Materials
- [ ] **Print QR codes:** Create physical prints of QR codes for in-store use
- [ ] **Menu flyers:** Design flyers with website QR code
- [ ] **Table tents:** Create table displays with QR code for easy ordering
- [ ] **Window decals:** Add website and social media info to storefront

### Ongoing Maintenance
- [ ] **Update menu regularly:** Keep menu.json current with pricing and items
- [ ] **Monitor analytics:** Review traffic and user behavior monthly
- [ ] **Update specials:** Create system for highlighting daily/weekly specials
- [ ] **Customer feedback:** Collect and address customer feedback on website

---

## Notes
- **Priority order:** Focus on Git cleanup → Development testing → Content completion → Deployment
- **Backend decision needed:** Determine if ordering will use third-party integration or custom solution
- **Owner involvement:** Get deli owner input on menu, photos, and business information
