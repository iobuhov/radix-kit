#!/usr/bin/env zx
import * as Gulp from 'gulp';
import { series } from 'gulp';
import 'zx/globals';
import { themesource } from './themesource.task.mjs';
import { widgets } from './widgets.task.mjs';

const [_, __, ...args] = process.argv;
const [command] = args;

async function runTask(task: Gulp.TaskFunction): Promise<void> {
  return new Promise((res) => {
    series(task)(() => res());
  });
}

async function main() {
  switch (command) {
    case 'themesource': {
      await runTask(
        themesource({
          projectPath: 'project',
        }),
      );
      return;
    }
    case 'widgets': {
      await runTask(widgets({ projectPath: 'project' }));
      return;
    }
    default:
      console.log('Unknown command');
      break;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
