# Aşkın Fear — Realm Portfolio

A creative sci-fi frontend portfolio with a portal entrance, neon navigation and a quest-based view of my work. My main professional portfolio is at [askin-portfolio.vercel.app](https://askin-portfolio.vercel.app).

[Explore the live realm](https://wild-butterfly.github.io/realm-portfolio/)

## Pages

- **Portal:** animated entrance with opt-in sound and reduced-motion support.
- **Realm hub:** keyboard-accessible links to the three quests and my studio.
- **Builds & Creations:** Flowody, Flowody Mobile, Clevermode, Movivate Website, Movivate Mobile and Flowody Software, plus earlier experiments.
- **Knowledge & Skills:** web, mobile, APIs, databases, cloud delivery and design tools.
- **About the Developer:** approved founder portrait, engineering background, current product work and contact links.

Honeycomb was the earlier name of Flowody; current visible copy uses Flowody throughout.

## Stack

React, Vite, React Router, React Icons and custom CSS with Tailwind available. Hash routing keeps direct page links working on GitHub Pages. All asset paths respect the `/realm-portfolio/` deployment base.

## Development

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

## Publish

```sh
npm run deploy
```

The predeploy script builds the site, then `gh-pages` publishes `dist` to the `gh-pages` branch. GitHub Pages must serve that branch. Source changes are committed separately to `main`.

## Content

Project copy and screenshots are defined in `src/data/projects.js` and `public/projects/`. The founder portrait is in `public/team/`. Portal sound is an existing bundled sound effect and plays only after the user enables it and enters the realm.
