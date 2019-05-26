export type Pokemon = {
  readonly id: number;
  readonly title: string;
  readonly flavor_text: string;
  readonly catch_rate: number;
  readonly name: string;
  readonly species: string;
  readonly sprite: string;
};
export type CaughtPokemon = Pokemon & { pokeball: string };
export type FlexDirection = {
  readonly row?: boolean;
  readonly column?: boolean;
};
export type Width = {
  readonly cWidth?: string | number;
};
export type FontWeight = {
  readonly bold?: boolean;
  readonly normal?: boolean;
  readonly thin?: boolean;
};
export type FontSize = {
  readonly large?: boolean;
  readonly small?: boolean;
  readonly medium?: boolean;
};
export type JustifyContent = {
  readonly jCenter?: boolean;
  readonly jStart?: boolean;
  readonly jEnd?: boolean;
  readonly jAround?: boolean;
  readonly jBetween?: boolean;
};
export type AlignItems = {
  readonly alCenter?: boolean;
  readonly alStart?: boolean;
  readonly alEnd?: boolean;
};
export type Wrap = {
  readonly fWrap?: boolean;
  readonly noFWrap?: boolean;
};
export type TextAlign = {
  readonly txCenter?: boolean;
  readonly txLeft?: boolean;
  readonly txRight?: boolean;
};
