// Habitat-Related Types
export type Habitat = { name: string; description: string };

export type Habitats = {
  [habitat: string]: Habitat;
};

// Pokemon-Related Types
export type Pokemon = {
  readonly id: string;
  readonly title: string;
  readonly flavor_text: string;
  readonly catch_rate: number;
  readonly name?: string;
  readonly species: string;
  readonly sprite: string;
  readonly tag?: string;
};

export type CaughtPokemon = Pokemon & { pokeball: string };

export type PokemonWithHabitat = Pokemon & { habitats: string };

export interface MissingNo extends Pokemon {
  readonly id: number | string;
  readonly catch_rate: number | string;
}

// Item-Related Types

export type Item = {
  readonly id: string;
  readonly name: string;
  quantity: number;
  readonly price?: number;
  readonly category?: ItemPouches;
  readonly description?: string;
};

export type ItemPouches = 'pokeballs' | 'berries';

export type PokeballIndex =
  | 'poke-ball'
  | 'great-ball'
  | 'ultra-ball'
  | 'park-ball'
  | 'master-ball';

export type HPBerriesIndex = 'razz-berry';
export type CatchBerriesIndex = 'oran-berry';
export type BerryIndex = CatchBerriesIndex | HPBerriesIndex;

export type Pokeballs = { readonly [pokeball in PokeballIndex]: number };

export type PokeballSprites = { readonly [pokeball in PokeballIndex]: string };

export type HPBerries = { readonly [berry in HPBerriesIndex]: number };

export type CatchBerries = {
  readonly [berry in CatchBerriesIndex]: StatusIndex
};

export type Berries = HPBerries & CatchBerries;

export type BerrySprites = { readonly [berry in BerryIndex]: string };

export type ItemIndex = PokeballIndex | BerryIndex;
export type BagContents = { [item: string]: Item };
export type Inventory = { pokeballs: BagContents; berries: BagContents };

// Battle-Related Types

export type BattleStates = 'active' | 'caught' | 'flee' | 'fainted';

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

export type Action<T> = {
  readonly type: string;
  readonly payload?: T;
};

export type FontStyle = { readonly italic?: boolean };
