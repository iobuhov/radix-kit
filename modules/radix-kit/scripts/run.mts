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

async function runTask(task: Gulp.TaskFunction): Promise<void> {
  return new Promise((res) => {
    series(task)(() => res());
  });
}

function getProjectPath() {
  const projectPath = process.env.MX_PROJECT_PATH;
  assert(projectPath, 'MX_PROJECT_PATH is not set');
  return projectPath;
}

const commands = {
  async themesource() {
    const projectPath = getProjectPath();
    log.info('Project path:', pc.green(projectPath));
    await runTask(themesource({ projectPath }));
  },
  async widgets() {
    const projectPath = getProjectPath();
    log.info('Project path:', pc.green(projectPath));
    await runTask(widgets({ projectPath }));
  },
  async watch() {
    const projectPath = getProjectPath();
    watch(
      themesource.watchGlob,
      { ignoreInitial: false },
      themesource({ projectPath, watch: true }),
    );
    watch(widgets.watchGlob, { ignoreInitial: false }, widgets({ projectPath, watch: true }));
  },
};

const [_, __, ...args] = process.argv;
const [command] = args;

if (command === undefined) {
  console.info('Available commands:');
  console.info('  themesource - Copy Radix Kit themes source files');
  console.info('  widgets - Copy Mendix widgets');
  console.info('  watch - Watch for changes in themes source and Mendix widgets');
  process.exit(0);
}

if (commands.hasOwnProperty(command)) {
  await commands[command as keyof typeof commands]();
  process.exit(0);
}

console.error(pc.red(`Unknown command: ${command}`));
process.exit(1);
