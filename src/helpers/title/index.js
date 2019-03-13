export function title(str) {
  if (str.length === 1) return str.toUpperCase();
  return str[0].toUpperCase() + str.slice(1);
}

export function spaceTitle(str) {
  return str
    .split(' ')
    .map(w => title(w))
    .join(' ');
}
