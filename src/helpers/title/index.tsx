export function title(str: string): string {
  if (str.length === 1) return str.toUpperCase();
  return str[0].toUpperCase() + str.slice(1);
}

export function spaceTitle(str: string): string {
  return str
    .split(' ')
    .map(w => title(w))
    .join(' ');
}
