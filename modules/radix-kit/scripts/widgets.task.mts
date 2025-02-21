import { dest, src } from 'gulp';
import rename from 'gulp-rename';
import { inspectFiles } from './inspect-files.mjs';

const globs = ['node_modules/*/dist/*/*.mpk', 'node_modules/*/*/dist/*/*.mpk'];

export const widgets = (options?: { projectPath: string }) => () => {
  const projectPath = options?.projectPath ?? '';
  const destPath = path.join(projectPath, 'widgets');
  const ins = inspectFiles({ title: 'Copying widgets' });

  return src(globs)
    .pipe(ins.inspectSrc)
    .pipe(
      rename({
        dirname: '',
      }),
    )
    .pipe(dest(destPath))
    .pipe(ins.inspectDest);
};

widgets.watchGlob = globs;
