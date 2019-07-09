export default function idToCaps(id: string): string {
  return id
    .split('-')
    .map(s => s[0].toUpperCase() + s.slice(1))
    .join(' ');
}
