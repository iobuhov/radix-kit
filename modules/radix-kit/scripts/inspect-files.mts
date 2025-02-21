import log from 'fancy-log';
import path from 'node:path';
import pc from 'picocolors';
import vinylPaths from 'vinyl-paths';

export function inspectFiles(options: { title?: string } = {}) {
  let src = vinylPaths();
  let dest = vinylPaths();

  dest.on('end', () => {
    const [srcPaths, destPaths] = [src.paths, dest.paths];

    if (options.title) {
      log.info(pc.bold(options.title));
    }
    for (let i = 0; i < srcPaths.length; i++) {
      const file = path.parse(srcPaths[i]);
      const fileDir = pc.gray(path.relative(process.cwd(), file.dir) + path.sep);
      const fileBase = pc.green(file.base);
      let msg = '';
      msg += `${fileDir}${fileBase}`;
      msg += `\n-> ${destPaths[i]}`;
      log.info(msg);
    }
    log.info(`Total files: ${pc.cyan(srcPaths.length)}`);
  });

  return {
    inspectSrc: src,
    inspectDest: dest,
  };
}
