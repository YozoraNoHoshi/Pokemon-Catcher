import { HP_MULT } from '../../data';

export default function hpPercentageMessage(percentage: number): string {
  // Possibly make HP_MULT keys get sorted
  for (let key of [0.2, 0.4, 0.6, 0.8, 1]) {
    if (percentage <= key) return HP_MULT[key];
  }
  return HP_MULT['1'];
}
