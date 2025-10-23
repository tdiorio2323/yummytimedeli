## Yummy Time Deli — Copilot instructions

This file gives focused, actionable guidance to AI coding agents working on this repository. Keep guidance short and concrete: reference files, commands, and exact patterns used in the codebase.

1) Big picture
- Single-page React app (Vite) in `src/` that renders an interactive menu and a demo cart. Entry: `src/main.jsx` -> `src/App.jsx`.
- Data-driven menu: canonical source is `src/data/menu.json` (rendered by `App.jsx`). Authoritative editing can also happen in `docs/menus/*.json` which scripts use to generate PDFs.
- Lightweight frontend-only "checkout" demo: cart persists to localStorage under key `ytd_cart_v2` and checkout opens a mailto: to `config.json`'s `store_email`.

2) Build / dev / scripts
- Start dev server: `npm run dev` (runs `vite`).
- Build for production: `npm run build` -> output `dist/`.
- Preview production build locally: `npm run preview`.
- Lint: `npm run lint` (ESLint).
- Python helper scripts are in `scripts/`:
  - `python scripts/gen_qr_codes.py` — reads `config.json` and writes QR PNGs to `public/assets/images` (ensure path expectations; the script currently writes to `~/yummytimedeli/public/assets/images`).
  - `python scripts/gen_menu_pdf.py` — reads `docs/menus/menu.json` and writes `public/menus/YummyTimeDeliMenu.pdf` (absolute paths are used; run from the host that has the repo at the same path or edit paths to relative ones).

3) Project conventions & patterns to preserve
- Tailwind-first styling. See `tailwind.config.js` and `src/index.css`/`App.css` for theme colors (primary/secondary/accent). Prefer Tailwind utilities over custom CSS.
- Menu data shape: array of section objects in `src/data/menu.json`. Each section: { section: string, desc?: string, items: [{ name: string, price?: number|null, isAddon?: boolean }] }.
- Item identity in cart: composite id `${item.name}__${item.price}` — preserve this when manipulating cart items so persistence and quantity math stays consistent.
- Price may be null for descriptive rows; UI skips arithmetic when price is falsy.
- Use localStorage key `ytd_cart_v2` for cart tests and fixtures.

4) Key files to inspect when making changes
- `src/App.jsx` — main app, search/filter logic, cart hook (`useLocalCart`), Section and CartDrawer components inline.
- `src/data/menu.json` — canonical menu used at runtime.
- `config.json` — store emails, ordering links, website and social links.
- `scripts/gen_qr_codes.py`, `scripts/gen_menu_pdf.py` — automation; note absolute paths.
- `src/components/*` — small components: `ContactForm.jsx`, `SocialLinks.jsx`, `Footer.jsx`.

5) Common tasks with examples
- Add a new menu section: edit `src/data/menu.json` (follow existing section object structure). Then run the dev server to verify rendering.
- Change store email used by checkout: update `config.json` -> `store_email` and verify CartDrawer->Checkout opens mailto: to that address.
- Regenerate QR codes after changing `config.json`:
  - Preferred: edit `scripts/gen_qr_codes.py` paths to use relative locations, then run `python scripts/gen_qr_codes.py` from repo root.
  - Quick-check: open `public/assets/images/*-qr.png` after running.

6) Edge cases & gotchas for AI agents
- Absolute paths in Python scripts: `scripts/gen_menu_pdf.py` and `scripts/gen_qr_codes.py` assume the repo lives at `/Users/tylerdiorio/yummytimedeli` or `~/yummytimedeli`. If running in CI or a contributor's environment, update scripts to use relative paths or `os.path.join(os.getcwd(), ...)`.
- Some menu item prices are null — code treats null/undefined prices as non-priced descriptive lines. When adding prices, use numbers (e.g., 9.00).
- The cart id uses name+price only — renaming items or changing prices will break persistence for existing carts; prefer migrating carts by clearing `ytd_cart_v2` in localStorage during major item ID changes.

7) Tests & verification steps
- Manual quick checks:
  - Start dev server: `npm run dev`, open `http://localhost:5173` and verify menu, search, add-to-cart, note behavior, and Checkout mailto:.
  - Run `python scripts/gen_qr_codes.py` and confirm output images in `public/assets/images`.

8) When changing UI or data flows
- Update or extend `useLocalCart()` in `src/App.jsx` — it handles add, setNote, clear, subtotal and persists to `localStorage`.
- For routing changes, edit `src/App.jsx` (uses `react-router-dom`) — two routes exist: `/` and `/about`.

9) If you need to modify deployment or CI
- This repo has no CI config in the tree — prefer adding a GitHub Actions workflow that runs `npm ci`, `npm run lint`, `npm run build` for PR validation.

10) Questions to ask the maintainer if ambiguous
- Should Python scripts be made relative-path friendly for CI/other contributors?
- Is the cart persistence format stable, or may we migrate to an item ID-based system (UUID)?

If anything here is unclear or you'd like more details (tests, CI workflows, or to convert the Python scripts to relative paths), tell me which area to expand.
