import 'dotenv/config';
import { watch } from 'gulp';
import assert from 'node:assert';
import { copy } from './tasks/copy.task.mjs';

watch(
  copy.watchGlob,
  { ignoreInitial: false },
  copy({ projectPath: getProjectPath(), onlyChanged: true }),
);

function getProjectPath() {
  const projectPath = process.env.MX_PROJECT_PATH;
  assert(projectPath, 'MX_PROJECT_PATH is not set');
  return projectPath;
}
