# Project CORE — Official Website

Static one-page website for **Project CORE**, the sci-fi action adventure by Gernot Lepschy (G.L. Studios).
It replaces the former Google Sites page (`sites.google.com/view/project-core`).

Live (after publishing): **https://gl2006.github.io/project-core-site/**

## Highlights

- **Plain HTML / CSS / JS** — no build step, no framework.
- **English + German** language toggle (saves the choice in `localStorage`).
- **Self-hosted media** — key art, posters, screenshots and trailer thumbnails were pulled from the Microsoft Store, the itch.io page and the previous Google Site, so the site has no image hotlinks.
- **Self-hosted fonts** — Orbitron and Rajdhani (SIL Open Font License).
- **Privacy-friendly video** — trailers are click-to-play facades; the YouTube (nocookie) player is only loaded after a click.
- **Lightbox gallery** for screenshots and posters (keyboard navigable).
- Responsive, accessible (skip link, focus states, reduced-motion support) and SEO-ready (Open Graph, JSON-LD `VideoGame`).

## Structure

```
project-core-site/
├── index.html          # single page, all sections
├── styles.css          # design system + layout
├── script.js           # i18n dictionaries + interactions
├── assets/
│   ├── fonts/          # Orbitron + Rajdhani (woff2)
│   └── img/            # key art, posters, screenshots, trailer thumbs, icons
├── .nojekyll
└── README.md
```

## Local preview

```bash
cd project-core-site
python3 -m http.server 8000
# open http://localhost:8000
```

## Deployment

The site is published with **GitHub Pages** from the `main` branch root of
[`GL2006/project-core-site`](https://github.com/GL2006/project-core-site).
Any push to `main` updates the live site — no build step required.

## Updating content

- **Text / translations:** edit the `I18N` object in `script.js`. Elements in `index.html`
  are wired up with `data-i18n="key"` (text), `data-i18n-html="key"` (HTML content) and
  `data-i18n-attr="attr:key;attr2:key2"` (attributes such as `alt`).
- **Store links / socials:** search for the URLs in `index.html` (footer links, hero
  buttons, contact section).
- **Images:** drop replacements into `assets/img/` using the same file names.

## Sources & credits

- Game, screenshots, key art, posters and logos: © Gernot Lepschy / G.L. Studios.
- Media retrieved from the [Microsoft Store listing](https://www.microsoft.com/store/apps/9NKZWT6JXHT6) and the
  [itch.io page](https://gl2006.itch.io/project-core); trailer previews from the
  [official YouTube channel](https://www.youtube.com/channel/UCeONUDfCebWWo4wY8hXiqIw).
- Fonts: [Orbitron](https://fonts.google.com/specimen/Orbitron) & [Rajdhani](https://fonts.google.com/specimen/Rajdhani), SIL Open Font License.

## Related links

- Portfolio: https://gl2006.github.io/gernot_lepschy_portfolio/
- Microsoft Store: https://www.microsoft.com/store/apps/9NKZWT6JXHT6
- itch.io: https://gl2006.itch.io/project-core
- Playable demo (Unity Play): https://play.unity.com/mg/other/project-core-demo-version

> Tip: to make the store pages point at this new site, update the website/homepage URL in the
> Microsoft Partner Center listing and in the itch.io project settings.
