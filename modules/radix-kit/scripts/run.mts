#!/usr/bin/env zx
import 'dotenv/config';
import log from 'fancy-log';
import * as Gulp from 'gulp';
import { series } from 'gulp';
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
  case 'themesource': {
    await runTask(themesource({ projectPath }));
    break;
  }
  case 'widgets': {
    await runTask(widgets({ projectPath }));
    break;
  }
  default:
    log.error(pc.red(`Unknown command: ${command}`));
    process.exit(1);
    break;
}
