#!/bin/sh
# Bundles src/main.js + three.js + post-processing into app.js (no import map needed).
# Usage: sh build.sh   (needs Node; downloads esbuild on first run)
cd "$(dirname "$0")"
npx -y esbuild@0.24.0 src/main.js --bundle --format=esm --minify --target=es2022 \
  --alias:three=./three.module.min.js --outfile=app.js
