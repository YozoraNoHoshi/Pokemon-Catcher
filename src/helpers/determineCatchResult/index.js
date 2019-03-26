import { statusMultiplier, POKEBALLS } from '../../data';

function calculateCatchRate(rate, pokeball, status, hpPercent = false) {
  let ballMultiplier = POKEBALLS[pokeball];

  let statusEffect = statusMultiplier[status] || statusMultiplier.normal;
  if (!hpPercent) return (rate * ballMultiplier * statusEffect) / 1.5;
  else
    return (
      ((300 - 200 * hpPercent) * rate * ballMultiplier * statusEffect) / 300
    );
}

function shakeCheck(catchRate) {
  let probability = Math.floor(
    1048560 /
      Math.floor(
        Math.sqrt(Math.floor(Math.sqrt(Math.floor(16711680 / catchRate))))
      )
  );
  let genNumber = Math.floor(Math.random() * 65535);
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
  rate,
  pokeball = 'poke-ball',
  status = 'normal',
  hpPercent = false
) {
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
