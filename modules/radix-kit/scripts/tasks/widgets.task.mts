import { dest, src } from 'gulp';
import rename from 'gulp-rename';
import { filterChanged } from './changed.mjs';
import { inspectFiles } from './inspect-files.mjs';
import { pipeline } from './utils.mjs';

const globs = ['node_modules/flex/dist/*/*.mpk', 'node_modules/badge/dist/*/*.mpk'];

export const widgets = (options?: { projectPath: string; onlyChanged?: boolean }) => {
  const onlyChanged = options?.onlyChanged ?? false;
  const projectPath = options?.projectPath ?? '';
  const destPath = path.join(projectPath, 'widgets');

  const copy = () => {
    let stream = src(globs).pipe(
      rename({
        dirname: '',
      }),
    );

    if (onlyChanged) {
      stream = filterChanged(stream, destPath);
    }

    const totalCopied = inspectFiles({
      title: 'Copied widgets',
      printPaths: true,
      printLimit: 10,
    });

    return pipeline(stream, totalCopied.start, dest(destPath), totalCopied.end);
  };

  return copy;
};

widgets.watchGlob = globs;
