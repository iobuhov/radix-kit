#!/usr/bin/env zx
import path from 'node:path';
import pc from 'picocolors';
import 'zx/globals';

const root = (await $`git rev-parse --show-toplevel`).stdout.trim();
const [_, __, ...args] = process.argv;
let [projectPath] = args;
projectPath ??= path.resolve(root, 'project');

const widgetsList = await $`pnpm ls --depth=-1 --json --filter="{widgets/**}"`;
const widgetPaths = JSON.parse(widgetsList.stdout).map((pkg: { path: string }) => pkg.path);

let paths = [
  path.resolve(root, 'modules/radix-kit'),
  path.resolve(root, 'packages/radix-ui-styles'),
  ...widgetPaths,
];

console.log('Project path:', pc.green(projectPath));
for (const dir of paths) {
  console.log('write .env to', dir);
  await fs.writeFile(path.join(dir, '.env'), `MX_PROJECT_PATH=${projectPath}\n`);
}
