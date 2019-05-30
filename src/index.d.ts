export type Habitat = { name: string; description: string };
export type Habitats = {
  [habitat: string]: Habitat;
};

export type Pokemon = {
  readonly id: number;
  readonly title: string;
  readonly flavor_text: string;
  readonly catch_rate: number;
  readonly name?: string;
  readonly species: string;
  readonly sprite: string;
};
export type CaughtPokemon = Pokemon & { pokeball: string };
export type PokemonWithHabitat = Pokemon & { habitats: string };
export interface MissingNo extends Pokemon {
  readonly id: number | string;
  readonly catch_rate: number | string;
}

export type PokeballIndex =
  | 'poke-ball'
  | 'great-ball'
  | 'ultra-ball'
  | 'park-ball'
  | 'master-ball';
export type Pokeballs = { [pokeball in PokeballIndex]: number };
export type PokeballSprites = { [pokeball in PokeballIndex]: string };
export type Sprites = {
  [sprite: string]: string;
};

export type HPBerries = {
  readonly 'razz-berry': number;
};

export type CatchBerries = {
  readonly 'oran-berry': StatusIndex;
};

export type Berries = HPBerries & CatchBerries;
export type CatchMessage = {
  readonly 0: string;
  readonly 1: string;
  readonly 2: string;
  readonly 3: string;
  readonly 4: string;
  [result: string]: string;
};
export type Status = {
  readonly freeze: number;
  readonly sleep: number;
  readonly paralyze: number;
  readonly burn: number;
  readonly poison: number;
  readonly normal: number;
};
export type StatusIndex = keyof Status;

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
export type Style = {
  readonly style?: React.CSSProperties;
};
export type Action = {
  readonly type: string;
  readonly payload: any;
};
