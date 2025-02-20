import { usePwsh as zxUsePwsh, fs } from 'zx';

if (process.platform === 'win32') {
  zxUsePwsh();
}

const colorsPath = 'sass/deps/@radix-ui/colors';
await fs.emptyDir(colorsPath);
await fs.copy('node_modules/@radix-ui/colors', colorsPath, { recursive: true, dereference: true });
