import transformStream from 'easy-transform-stream';
import log from 'fancy-log';
import type { Transform as TransformStream } from 'node:stream';
import * as File from 'vinyl';

export function logger(transformPath?: (file: File) => string): TransformStream {
  const stream = transformStream({ objectMode: true }, async (file) => {
    transformPath ??= (file: File) => file.path;
    log.info(transformPath(file as File));
    return file;
  });
  return stream;
}
