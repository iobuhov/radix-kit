#!/usr/bin/env zx
import path from 'node:path';
import 'zx/globals';

const root = (await $`git rev-parse --show-toplevel`).stdout.trim();
const args = process.argv.slice(2);
const packages = await $`pnpm -r ls --depth=-1 --json --filter="{widgets/**}"`;
const widgets = JSON.parse(packages.stdout) as { path: string }[];

let [projectPath] = args;
projectPath ??= path.resolve(root, 'project');
let paths = [path.resolve(root, 'packages/radix-ui-themes')];
paths = [...paths, ...widgets.map((widget) => widget.path)];

console.log('projectPath', projectPath);

for (const dir of paths) {
  console.log('write .env to', dir);
  await fs.writeFile(path.join(dir, '.env'), `MX_PROJECT_PATH=${projectPath}\n`);
}
