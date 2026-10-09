# Stable 🧱

A tower stacking game for mobile and desktop browsers. Tap to drop the block, land it perfectly, and build all the way to the edge of the universe.

## Play
Open `index.html` in a browser, or enable **GitHub Pages** for this repo (Settings → Pages → Deploy from branch → `main` / root) and play at `https://<your-username>.github.io/Stable/`.

## Game modes
- **Endless**: build as high as you can, through 12 levels from the ground to the edge of the universe
- **Campaign**: 5 chapters × 24 stages with different goals, trick blocks and bosses
- **Daily Tower**: the same tower for everyone, one try per day
- **Wobble Tower**: nothing gets chopped, so keep real objects balanced (free play + 15 levels)
- **Rhythm**: 10 songs, drop on the beat for stars
- **Challenge**: share a code and beat a friend on the exact same tower

## Features
Pets with perks, 30+ blocks, biomes, rebirths (up to 100), season pass, daily missions, achievements, sunflowers & coins, power-ups, a town to build, tutorials for every mode.

## Notes
- Progress is saved in the browser (localStorage).
- The global leaderboard, weekly tournament and bug reports use the claude.ai artifact database. They only work when the game is opened from its claude.ai link. Outside claude.ai they show a friendly message instead.
- Ads and purchases are placeholders (test mode in Settings). In the Android app they will be connected to AdMob and Google Play Billing.

Made with Claude.

## Hosting
- `site/` is published by Cloudflare Pages at **https://studio.grane.app** (the Studio.grane home page) with the game at **/stable/**. Run `./publish-site.sh` after updating the game files to copy them into `site/stable/`.
- The repo root still serves the old address `https://thurbohnek.github.io/Stable/` through GitHub Pages. `migrate.html` hands saved progress to the new address once.
