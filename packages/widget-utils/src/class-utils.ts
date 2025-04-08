export function withDefaultClasses(className: string, defaults: [re: RegExp, token: string][]): string {
  const cls = defaults.reduce((classList, [re, token]) => {
    if (!re.test(className)) {
      classList.push(token);
    }
    return classList;
  }, className.split(" "));
  return cls.join(" ");
}
