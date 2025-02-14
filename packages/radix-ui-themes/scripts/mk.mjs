import { fs } from 'zx';
const colors = [
  'slate',
  'sage',
  'olive',
  'sand',
  'blue',
  'bronze',
  'brown',
  'crimson',
  'cyan',
  'gold',
  'grass',
  'green',
  'indigo',
  'iris',
  'jade',
  'lime',
  'mint',
  'orange',
  'pink',
  'plum',
  'purple',
  'red',
  'ruby',
  'sky',
  'teal',
  'tomato',
  'violet',
  'yellow',
];

for (const color of colors) {
  //   fs.writeFile(`sass/tokens/colors/_${color}.scss`, '');
  fs.remove(`sass/tokens/colors/_${color}.scss`);
}
