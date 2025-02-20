#!/usr/bin/env zx

import 'dotenv/config.js';
import path from 'node:path';
import concurrently from 'concurrently';

const moduleName = 'radixkit';
const dest = path.join(process.env.MX_PROJECT_PATH, 'themesource', moduleName, 'web');

async function main() {
  const cmd1 = {
    name: 'radix-ui-themes/copy-sass',
    command: `copy-and-watch --watch "sass/**/*" "${dest}"`,
  };

  concurrently([cmd1], {
    killOthers: ['failure'],
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
