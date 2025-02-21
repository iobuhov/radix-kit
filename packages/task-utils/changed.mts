import changed from 'gulp-changed';
import { inspectChanged } from './inspect-files.mjs';
import { pipeline } from './utils.mjs';

export function filterChanged(stream: NodeJS.ReadWriteStream, destPath: string) {
  const totalChanged = inspectChanged();

  return pipeline(stream, totalChanged.start, changed(destPath), totalChanged.end);
}
