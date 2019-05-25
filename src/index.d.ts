export interface Pokemon {
  readonly id: number;
  readonly title: string;
  readonly flavor_text: string;
  readonly catch_rate: number;
  readonly name: string;
  readonly species: string;
  readonly sprite: string;
}
export interface FlexDirection {
  readonly row?: boolean;
  readonly column?: boolean;
}
export interface Width {
  readonly cWidth?: string | number;
}
export interface FontWeight {
  readonly bold?: boolean;
  readonly normal?: boolean;
  readonly thin?: boolean;
}
export interface FontSize {
  readonly large?: boolean;
  readonly small?: boolean;
  readonly medium?: boolean;
}
export interface JustifyContent {
  readonly jCenter?: boolean;
  readonly jStart?: boolean;
  readonly jEnd?: boolean;
  readonly jAround?: boolean;
  readonly jBetween?: boolean;
}
export interface AlignItems {
  readonly alCenter?: boolean;
  readonly alStart?: boolean;
  readonly alEnd?: boolean;
}
export interface Wrap {
  readonly fWrap?: boolean;
  readonly noFWrap?: boolean;
}
export interface TextAlign {
  readonly txCenter?: boolean;
  readonly txLeft?: boolean;
  readonly txRight?: boolean;
}
