#!/usr/bin/env zx
import 'zx/globals';

// const root = (await $`git rev-parse --show-toplevel`).stdout.trim();
// const args = process.argv.slice(2);
// const packages = await $`pnpm -r ls --depth=-1 --json --filter="{widgets/**}"`;
// const widgets = JSON.parse(packages.stdout) as { path: string }[];

// let [projectPath] = args;
// projectPath ??= path.resolve(root, 'project');
// let paths = [path.resolve(root, 'packages/radix-ui-themes')];
// paths = [...paths, ...widgets.map((widget) => widget.path)];

// console.log('projectPath', projectPath);

fs.copy('./node_modules/radix-ui-themes/sass', './sass');
