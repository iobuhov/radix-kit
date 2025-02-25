const widgets = `
  flex,
  badge
`;

export const list = widgets
  .split(",\n")
  .filter(Boolean)
  .map((item) => item.trim());
