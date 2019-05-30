import { statusMultiplier, POKEBALLS } from '../../data';
import { PokeballIndex, StatusIndex } from '../..';

function calculateCatchRate(
  rate: number,
  pokeball: PokeballIndex,
  status: StatusIndex,
  hpPercent: number | undefined
) {
  let ballMultiplier: number = POKEBALLS[pokeball];
  let statusEffect: number =
    statusMultiplier[status] || statusMultiplier.normal;
  if (!hpPercent) return (rate * ballMultiplier * statusEffect) / 3;
  else return (1 - (2 / 3) * hpPercent) * rate * ballMultiplier * statusEffect;
}

function shakeCheck(catchRate: number): boolean {
  let probability: number = Math.floor(
    1048560 /
      Math.floor(
        Math.sqrt(Math.floor(Math.sqrt(Math.floor(16711680 / catchRate))))
      )
  );
  let genNumber: number = Math.floor(Math.random() * 65535);
  if (genNumber >= probability) return false;
  else return true;
}

/**
 * Determines the probability of a pokemon being caught. Returns an object detailing catch results.
 * @param {Number} rate of the pokemon. 255 results in guaranteed catch.
 * @param {String} pokeball the pokeball being used. master-ball results in guaranteed catch.
 * @param {String} status identifier for status
 * @param {Number} hpPercent a value between 0 and 1. Determines if HP affects the catch rate (default is false for no hp affect)
 * @returns {Number} If value is === 4, indicates catch was a success. If not, determines the number of shakes before pokemon breaks free.
 */
export default function determineCatchResult(
  rate: number,
  pokeball: PokeballIndex,
  status: StatusIndex,
  hpPercent?: number
): number {
  if (pokeball === 'master-ball' || rate >= 255) return 4;
  let catchRate = calculateCatchRate(rate, pokeball, status, hpPercent);
  let numShakes = 0;
  let currentRoll = true;
  while (currentRoll && numShakes < 4) {
    currentRoll = shakeCheck(catchRate);
    if (currentRoll) numShakes += 1;
  }
  return numShakes;
}
