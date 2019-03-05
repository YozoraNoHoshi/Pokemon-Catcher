const statusMultiplier = {
  freeze: 2,
  sleep: 2,
  paralyze: 1.5,
  burn: 1.5,
  poison: 1.5,
  normal: 1
};

function calculateCatchRate(rate, ballMultiplier, status, hpPercent = false) {
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
 * @param {*} catchRate
 * @param {Number} ballMultiplier multiplier for balls. Default value is 1
 * @param {Number} status identifier for status
 * @param {Number} HP is a number between 0 and 1 for the percentage of hp
 * @returns {Number} If value is === 4, indicates catch was a success. If not, determines the number of shakes before pokemon breaks free.
 */
export default function determineCatchResult(
  rate,
  ballMultiplier = 1,
  status = 'normal',
  hpPercent = false
) {
  let catchRate = calculateCatchRate(rate, ballMultiplier, status, hpPercent);
  let numShakes = 0;
  let currentRoll = true;
  while (currentRoll && numShakes < 4) {
    currentRoll = shakeCheck(catchRate);
    if (currentRoll) numShakes += 1;
  }
  return numShakes;
}