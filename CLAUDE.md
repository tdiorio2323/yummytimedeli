# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Yummy Time Deli website - a React-based single-page application with interactive menu, cart functionality, and contact features.

**Business Details:**
- Location: 2142 Forest Avenue, Staten Island, NY 10303
- Phone: (718)-887-0178
- Email: orders@yummytimedeli.com
- Website: http://www.yummytimedelinyc.com/

## Tech Stack
- **Framework**: React 19 with React Router for navigation
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3.4 with custom theme
- **Scripts**: Python 3 for menu PDF generation and QR code creation

## Development Commands
```bash
npm run dev      # Start development server (Vite)
npm run build    # Production build
npm run lint     # ESLint code checking
npm run preview  # Preview production build locally
```

## Architecture

### Application Structure
- **Entry Point**: `src/main.jsx` renders the root `App.jsx` component
- **Routing**: React Router with two main routes:
  - `/` - Home page with menu and cart
  - `/about` - About page
- **State Management**: Custom `useLocalCart()` hook with localStorage persistence
- **Error Handling**: Class-based ErrorBoundary component wraps the entire app

### Key Components
- `App.jsx` - Main application with menu sections, cart drawer, and routing
- `Section` - Renders individual menu sections with "Add to Cart" buttons
- `CartDrawer` - Bottom drawer showing cart items with quantity controls and notes
- `ContactForm.jsx` - Contact form component
- `SocialLinks.jsx` - Social media links
- `Footer.jsx` - Site footer
- `About.jsx` - About page content

### Data & Configuration
- **Menu Data**: `src/data/menu.json` - structured menu items imported into App.jsx
- **Config**: `config.json` - stores URLs for ordering links, social media, email, Google Maps
- **Cart Storage**: localStorage key `ytd_cart_v2` persists cart between sessions

### Tailwind Theme
Custom colors defined in `tailwind.config.js`:
- `primary`: #FFC700 (yellow/gold)
- `secondary`: #D32F2F (red)
- `accent`: #4E342E (brown)
- `background`: #F5F5F5 (light gray)
- `text`: #212121 (dark gray)

Fonts: Poppins (sans) and Roboto (serif) loaded from Google Fonts

### Python Scripts
Located in `scripts/`:
- `gen_menu_pdf.py` - Generates PDF menu from `docs/menus/menu.json` using ReportLab
- `gen_qr_codes.py` - Creates QR codes for website, ordering platforms, and Google Maps from `config.json`

Run scripts with: `python scripts/gen_menu_pdf.py` or `python scripts/gen_qr_codes.py`

## File Organization
- `/src/` - React application source
  - `/components/` - Reusable UI components
  - `/pages/` - Page components (About, etc.)
  - `/data/` - JSON data files (menu.json)
- `/public/` - Static assets served directly
  - `/assets/images/` - Logo, QR codes, images
  - `/menus/` - Generated menu PDFs
- `/docs/` - Documentation and source files
  - `/menus/` - Menu content in JSON format
  - `/branding/` - Brand guidelines and assets
- `/scripts/` - Python automation scripts

## Important Implementation Details

### Cart Functionality
- Items identified by composite key: `${item.name}__${item.price}`
- Hold Shift when clicking "Add" to include a note (e.g., "no onions")
- Edit notes by clicking the ✎ icon in cart drawer
- Checkout opens mailto: link with order preview (demo mode)

### Menu Search
- Real-time search filters menu sections and items
- Searches across both section name and item name
- Empty sections are hidden when filtered

### Configuration Updates
When updating business info (phone, address, links):
1. Edit `config.json` for ordering links, social media, email
2. Update CLAUDE.md business details section
3. Regenerate QR codes: `python scripts/gen_qr_codes.py`

## Development Guidelines
- Mobile-first responsive design for on-the-go customers
- Keep menu sections organized and easy to navigate
- Optimize for local SEO (Staten Island searches)
- Use Tailwind utility classes; avoid custom CSS when possible

## Deployment
- **Primary**: Vercel (recommended for fast deployment and custom domain)
- **Alternative**: Netlify or Framer
- Build output: `dist/` directory after running `npm run build`