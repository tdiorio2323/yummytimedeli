# Project Overview

This project is a modern web application for the Yummy Time Deli. It's built with React, Vite, HTML, CSS, and JavaScript. The primary purpose is to provide a digital presence for the deli, including menu, ordering links, and contact information.

## Project Structure

```
/Users/tylerdiorio/yummytimedeli/
├───.gitignore
├───CLAUDE.md
├───config.json
├───eslint.config.js
├───GEMINI.md
├───index.html
├───package-lock.json
├───package.json
├───postcss.config.js
├───README.md
├───tailwind.config.js
├───vite.config.js
├───.git/...
├───.vercel/...
├───docs/
│   ├───branding/
│   └───menus/
│       ├───menu.json
│       ├───YummyTimeDeliMenu.md
│       └───YummyTimeDeliMenu.pdf
├───node_modules/...
├───public/
│   ├───apple-touch-icon.png
│   ├───banner.png
│   ├───favicon.ico
│   ├───manifest.webmanifest
│   ├───robots.txt
│   ├───sitemap.xml
│   ├───styles.css
│   ├───assets/
│   │   └───images/
│   │       ├───doordash-qr.png
│   │       ├───google_profile-qr.png
│   │       ├───grubhub-qr.png
│   │       ├───ubereats-qr.png
│   │       ├───website-qr.png
│   │       ├───yummy-time-deli-logo.png
│   │       └───yumy.png
│   └───menus/
│       └───YummyTimeDeliMenu.pdf
├───scripts/
│   ├───gen_menu_pdf.py
│   └───gen_qr_codes.py
└───src/
    ├───App.css
    ├───App.jsx
    ├───index.css
    ├───main.jsx
    ├───assets/
    │   └───react.svg
    ├───components/
    ├───pages/
    └───styles/
```

## Key Technologies

*   **Frontend:** React (JavaScript/JSX), Vite, HTML, CSS
*   **Automation:** Python scripts are used for generating a PDF menu and QR codes.
*   **Package Manager:** npm/pnpm with Vite for building and development.

## Building and Running

To run the development server:
```bash
npm run dev
```

To build the project for production:
```bash
npm run build
```

The following scripts are available for automation:

*   `python3 scripts/gen_menu_pdf.py`: Generates a PDF version of the menu from `docs/menus/menu.json`.
*   `python3 scripts/gen_qr_codes.py`: Generates QR codes for the website, ordering platforms, and Google Maps based on `config.json`.

## Development Conventions

*   Static assets (images, CSS, etc.) are located in the `public` directory.
*   The main HTML entry file is `index.html` in the project root.
*   The menu content is managed in `docs/menus/menu.json`. To update the menu PDF, edit this JSON file and re-run `python3 scripts/gen_menu_pdf.py`.
*   Ordering links and other website configurations are managed in `config.json`. To update QR codes, edit `config.json` and re-run `python3 scripts/gen_qr_codes.py`.
