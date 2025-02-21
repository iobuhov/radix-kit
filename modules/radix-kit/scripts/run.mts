#!/usr/bin/env zx
import 'dotenv/config';
import log from 'fancy-log';
import * as Gulp from 'gulp';
import { series, watch } from 'gulp';
import assert from 'node:assert';
import pc from 'picocolors';
import 'zx/globals';
import { themesource } from './tasks/themesource.task.mjs';
import { widgets } from './tasks/widgets.task.mjs';

const [_, __, ...args] = process.argv;
const [command] = args;

const projectPath = process.env.MX_PROJECT_PATH;
assert(projectPath, 'MX_PROJECT_PATH is not set');

log.info('Project path:', pc.green(projectPath));

async function runTask(task: Gulp.TaskFunction): Promise<void> {
  return new Promise((res) => {
    series(task)(() => res());
  });
}

switch (command) {
  case undefined: {
    log.info('Available commands:');
    log.info('  themesource - Copy Radix Kit themes source files');
    log.info('  widgets - Copy Mendix widgets');
    break;
  }
  case 'themesource': {
    await runTask(themesource({ projectPath }));
    break;
  }
  case 'widgets': {
    await runTask(widgets({ projectPath }));
    break;
  }
  case 'watch': {
    watch(
      themesource.watchGlob,
      { ignoreInitial: false },
      themesource({ projectPath, watch: true }),
    );
    watch(widgets.watchGlob, { ignoreInitial: false }, widgets({ projectPath, watch: true }));
    break;
  }
  default: {
    log.error(pc.red(`Unknown command: ${command}`));
    process.exit(1);
  }
}
