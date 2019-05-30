// Habitat-Related Types
export type Habitat = { name: string; description: string };

export type Habitats = {
  [habitat: string]: Habitat;
};

// Pokemon-Related Types
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

// Item-Related Types
export type PokeballIndex =
  | 'poke-ball'
  | 'great-ball'
  | 'ultra-ball'
  | 'park-ball'
  | 'master-ball';

export type Pokeballs = { readonly [pokeball in PokeballIndex]: number };

export type PokeballSprites = { readonly [pokeball in PokeballIndex]: string };

export type HPBerriesIndex = 'razz-berry';

export type HPBerries = { readonly [berry in HPBerriesIndex]: number };

export type CatchBerriesIndex = 'oran-berry';

export type CatchBerries = {
  readonly [berry in CatchBerriesIndex]: StatusIndex
};

export type Berries = HPBerries & CatchBerries;
export type BerrySprites =
  | { readonly [berry in HPBerriesIndex]: string }
  | { readonly [berry in CatchBerriesIndex]: string };

// Battle-Related Types
export type CatchMessage = {
  readonly 0: string;
  readonly 1: string;
  readonly 2: string;
  readonly 3: string;
  readonly 4: string;
  [result: string]: string;
};

export type StatusIndex =
  | 'freeze'
  | 'sleep'
  | 'paralyze'
  | 'burn'
  | 'poison'
  | 'normal';

export type Status = { readonly [effect in StatusIndex]: number };

// CSS Props Types
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
