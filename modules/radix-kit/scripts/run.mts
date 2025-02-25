#!/usr/bin/env zx
import "dotenv/config";
import log from "fancy-log";
import * as Gulp from "gulp";
import { series } from "gulp";
import assert from "node:assert";
import pc from "picocolors";
import "zx/globals";
import { designProps } from "./tasks/design-props.task.mjs";
import { themesource } from "./tasks/themesource.task.mjs";
import { widgets } from "./tasks/widgets.task.mjs";

async function runTask(task: Gulp.TaskFunction): Promise<void> {
  return new Promise((res) => {
    series(task)(() => res());
  });
}

function getProjectPath() {
  const projectPath = process.env.MX_PROJECT_PATH;
  assert(projectPath, "MX_PROJECT_PATH is not set");
  return projectPath;
}

const commands = {
  async themesource() {
    const projectPath = getProjectPath();
    log.info("Project path:", pc.green(projectPath));
    await runTask(themesource({ projectPath }));
  },
  async widgets() {
    const projectPath = getProjectPath();
    log.info("Project path:", pc.green(projectPath));
    await runTask(widgets({ projectPath }));
  },
  async "design-props"() {
    const projectPath = getProjectPath();
    log.info("Project path:", pc.green(projectPath));
    await runTask(designProps({ projectPath }));
  },
  async build() {
    const projectPath = getProjectPath();
    log.info("Project path:", pc.green(projectPath));
    await runTask(series(themesource({ projectPath, onlyChanged: true }), widgets({ projectPath, onlyChanged: true })));
  },
  // NOTE: Don't use watch. It's going to be replaced with `turbo watch`.
  // async watch() {
  //   const projectPath = getProjectPath();
  //   watch(
  //     themesource.watchGlob,
  //     { ignoreInitial: false },
  //     themesource({ projectPath, onlyChanged: true }),
  //   );
  //   watch(widgets.watchGlob, { ignoreInitial: false }, widgets({ projectPath, onlyChanged: true }));
  // },

  // 'watch:sass': async () => {
  //   const projectPath = getProjectPath();
  //   watch(
  //     themesource.watchGlob,
  //     { ignoreInitial: false },
  //     themesource({ projectPath, onlyChanged: true }),
  //   );
  // },
};

async function main() {
  const [_, __, ...args] = process.argv;
  const [command] = args;

  if (command === undefined) {
    console.info("Available commands:");
    console.info("  themesource - Copy Radix Kit themes source files");
    console.info("  widgets - Copy Mendix widgets");
    return;
  }

  if (!commands.hasOwnProperty(command)) {
    throw new Error(`Unknown command: ${command}`);
  }

  await commands[command as keyof typeof commands]();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
