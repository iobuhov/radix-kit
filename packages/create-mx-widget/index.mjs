#!/usr/bin/env node
import path from 'node:path';
import { execSync } from 'node:child_process';
import minimist from 'minimist';
import { Plop, run } from 'plop';

const args = process.argv.slice(2);
const argv = minimist(args);

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = execSync('git rev-parse --show-toplevel').toString().trim();
const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.cwd() !== root) {
  console.error('Please run this script from the root of the repository');
  process.exit(1);
}

Plop.prepare(
  {
    cwd: process.cwd(),
    configPath: path.join(__dirname, 'plopfile.mjs'),
    preload: argv.preload || [],
    completion: argv.completion,
  },
  (env) => Plop.execute({ ...env, dest: process.cwd() }, run),
);
