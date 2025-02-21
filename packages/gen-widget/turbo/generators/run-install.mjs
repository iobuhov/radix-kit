import { spawnSync } from 'node:child_process';

export const runInstall = (answers, config, plop) => {
  spawnSync(`cd ${answers.baseDir} && pnpm install && pnpm build`, [], {
    stdio: 'inherit',
    shell: true,
  });
};
