/**
 * Calculates the flee rate of a Pokemon given a series of parameters
 * @param catchRate The catch rate of the Pokemon. Required.
 * @param turns The turn count of the battle.
 * @param prevRate The previous flee rate. Defaults to 0 if not provided.
 */
export default function calcFleeRate(
  catchRate: number,
  elapsedTurns: number,
  relativeTurns: number,
  prevRate: number = 0
): number {
  if (catchRate === 0) return 1;
  if (elapsedTurns <= 5 || relativeTurns < 0) return 0;

  let x = (100 * Math.floor(Math.random() * 5)) / catchRate;
  let fleeRate: number = (1 + Math.floor(elapsedTurns / 10) / 10) * x;
  return prevRate + Math.min(fleeRate, 2.5);
}
