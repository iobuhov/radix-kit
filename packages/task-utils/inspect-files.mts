import log from 'fancy-log';
import path from 'node:path';
import pc from 'picocolors';
import vinylPaths from 'vinyl-paths';

interface Options {
  title?: string;
  formatTotal?: (totalIn: number, totalOut: number) => string;
  printPaths?: boolean;
  printLimit?: number;
}

export function inspectFiles(options: Options = {}) {
  const printPaths = options.printPaths ?? false;
  const printLimit = Math.max(options.printLimit ?? 5, 0);
  let src = vinylPaths();
  let dest = vinylPaths();

  dest.on('end', () => {
    const [srcPaths, destPaths] = [src.paths, dest.paths];

    if (options.title) {
      log.info('==>', pc.bold(options.title));
    }

    if (printPaths) {
      if (srcPaths.length > printLimit) {
        log.info('...');
      }
      const pairs = srcPaths.slice(-printLimit).map((srcPath) => {
        return [
          srcPath,
          destPaths.find((filepath) => path.parse(filepath).base === path.parse(srcPath).base),
        ] as const;
      });

      pairs.forEach(([srcPath, destPath]) => {
        const file = path.parse(srcPath);
        const fileDir = pc.gray(path.relative(process.cwd(), file.dir) + path.sep);
        const fileBase = file.base;
        log.info(`${fileDir}${fileBase}`);
        log.info(`=> ${pc.green(destPath)}`);
        log.info();
      });
    }

    const total =
      options.formatTotal?.(srcPaths.length, destPaths.length) ??
      `==> Total files: ${pc.green(srcPaths.length)}`;

    log.info(total);
  });

  return {
    start: src,
    end: dest,
  };
}

export const inspectChanged = () =>
  inspectFiles({
    formatTotal: (totalIn, totalOut) => {
      const count = pc.green(`${pc.cyan(totalOut)}/${totalIn}`);
      return `==> ${count} files changed`;
    },
  });
