# Tailblocks — Architecture

Overview
- Tailblocks is a small React application and component/sample library providing ready-to-use UI "blocks" built with Tailwind CSS. It is delivered as a Create React App (CRA) project with local PostCSS/Tailwind integration so examples render in the browser and can be copied into other projects.

Primary folders
- public/: static entry files served by the dev server. Contains `index.html`, built assets and the `fonts/` folder when fonts are downloaded locally.
- src/: application source. Key items:
  - `index.js`: app bootstrap and ReactDOM.render.
  - `index.css`: global CSS; contains Tailwind directives and project custom styles.
  - `App.js`: main UI shell and controls (toolbar, sidebar, preview iframe).
  - `blocks/`: categorized block components and icons (organized by category and light/dark variants).

Configuration and build
- `package.json`: npm scripts and dependency manifest. Important scripts added by this repo:
  - `start`: runs `craco start` (wrapped via `cross-env` to set `NODE_OPTIONS` for OpenSSL legacy support when needed).
  - `build`: `craco build` for production bundles.
  - `download:fonts`: node script that downloads Space Mono and writes a local CSS under `public/fonts/SpaceMono/space-mono.css`.
- CRACO (`craco.config.js`): used to extend CRA Webpack/PostCSS pipeline without ejecting.
- PostCSS and Tailwind (`postcss.config.js`, `tailwind.config.js`): Tailwind is compiled during dev/build through PostCSS. `tailwind.config.js` specifies content paths to scan (`public/index.html` and `src/**/*`).

Styling and assets
- Tailwind is included locally (via PostCSS) so class names used in `blocks/` are compiled into the app bundle.
- Fonts: the repo contains scripts (`scripts/download-fonts.js` and `scripts/download-fonts.ps1`) to fetch Google Fonts assets and produce a local CSS file under `public/fonts/SpaceMono/` so the app can run offline and avoid external CDN dependencies.

Dev flow
- `npm run download:fonts` — fetch fonts and write local CSS.
- `npm start` — starts webpack dev server (via CRACO) and serves `public/`. The preview iframe loads block markup and styles from the same dev server.

Build & deploy
- `npm run build` produces an optimized production bundle.
- `predeploy`/`deploy` are configured for publishing via `gh-pages` (project currently has `gh-pages` configured in `package.json`).

Notes & upgrade considerations
- Dependencies have been bumped in bulk in this workspace; large jumps (CRA, React, CRACO, tooling) can create deep-peer conflicts (example: ajv / ajv-keywords / schema-utils mismatches). Upgrading should be done in controlled stages:
  1. Run automated upgrades (ncu) to update ranges.
  2. Install and resolve peer conflicts one group at a time (webpack/tooling, then app libs).
  3. Run `npm start` and fix runtime errors (e.g., AJV, terser, webpack plugins).
- Node/OpenSSL: older `react-scripts` + webpack builds can error on modern Node/OpenSSL; the project currently sets `NODE_OPTIONS=--openssl-legacy-provider` to work around that during dev. Consider using Node LTS compatible with tooling or update build tooling to avoid this flag.

Where to look next
- App shell and blocks: `src/App.js`, `src/blocks/`
- Styles and Tailwind: `src/index.css`, `tailwind.config.js`, `postcss.config.js`
- Dev tooling: `package.json` scripts, `craco.config.js`, `scripts/download-fonts.js`

If you want, I can produce a short upgrade plan to move the project to CRA 5 / React 18+ (or React 19) with a tested sequence of dependency changes and fixes.
