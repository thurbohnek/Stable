#!/bin/sh
# Copies the game into site/stable/ (served by Cloudflare Pages at studio.grane.app/stable/).
# The repo root keeps serving the old address (thurbohnek.github.io/Stable/) via GitHub Pages.
set -e
cd "$(dirname "$0")"
mkdir -p site/stable
cp index.html manifest.json sw.js privacy.html icon-192.png icon-512.png icon-maskable-512.png play-store-feature-graphic-1024x500.png site/stable/
