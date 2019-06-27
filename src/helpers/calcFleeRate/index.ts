/**
 * Calculates the flee rate of a Pokemon given a series of parameters
 * @param catchRate The catch rate of the Pokemon. Required.
 * @param modifier Outside modifers brought out by berries, weather conditions, etc.
 * @param prevRate The previous flee rate. Defaults to 0 if not provided.
 * @param turns The turn count of the battle. Defaults to 0 if not provided.
 */
export default function calcFleeRate(
  catchRate: number,
  turns: [number, number],
  prevRate: number = 0
): number {
  const [elapsedTurns, relativeTurns] = turns;
  if (catchRate === 0) return 1;
  if (relativeTurns < 0) return 0;
  let x = Math.floor(Math.random() * 5) / catchRate;
  let fleeRate: number = (1 + Math.floor(elapsedTurns / 10) / 10) * x;
  return prevRate + Math.min(fleeRate, 2.5);
}
