export default function getStatusDuration(m: number): number {
  let max, range;
  if (m === 2) {
    max = 5;
    range = 3;
  } else {
    max = 15;
    range = 5;
  }
  return max - Math.floor(Math.random() * range);
}
