import { dest, src } from 'gulp';
import path from 'node:path';
import { inspectFiles } from '../inspect-files.mjs';

const glob = 'node_modules/@radix-ui/themes-radix-kit/sass/**/*.{scss,css}';

export const themesource = (options?: { projectPath: string }) => () => {
  const projectPath = options?.projectPath ?? '';
  const destPath = path.join(projectPath, 'themesource/radixkit/web');
  const ins = inspectFiles({ title: 'Copying Radix Kit themes source files' });

  return src(glob).pipe(ins.inspectSrc).pipe(dest(destPath)).pipe(ins.inspectDest);
};

themesource.watchGlob = glob;
