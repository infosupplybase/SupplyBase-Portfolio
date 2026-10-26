# Supplybase Portfolio

Portfolio site for [Supplybase](https://www.supplybase.co.in) — painting, waterproofing, POP ceiling and interior design in Thane & Mumbai. *One Partner. Complete Project.*

Built with React (Vite) and plain CSS — no other frontend libraries.

## Run locally

```bash
npm install
npm run dev
```

Build for production with `npm run build` (output in `dist/`).

## Where things live

| Path | What it holds |
|---|---|
| `src/data/siteData.js` | All text: services, stats, process, FAQ, contact details |
| `src/data/media.js` | Hero video, service images, project photos, video sliders |
| `src/data/designCatalogue.js` | Interior Design Catalogue: 64 SB-coded designs with highlights and finishes (images in `public/images/catalogue`) |
| `src/data/catalogue.js` | Design Gallery (Interior by Choice, waterproofing, POP ceilings) |
| `src/sections/` | One component per page section |
| `src/components/` | Navbar, footer, shared UI |
| `public/images/`, `public/videos/` | Photos and (muted) videos |

To add a photo or video, drop the file in `public/images` or `public/videos` and reference it in `src/data/media.js`.
