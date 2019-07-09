import {
  Pokeballs,
  MissingNo,
  HPBerries,
  CatchBerries,
  Status,
  CatchMessage,
  PokeballSprites,
  BerrySprites
} from '../types';

// Catching Pokemon Related
export const HP_MULT: { [percentage: string]: string } = {
  1: 'normal',
  0.8: 'slightly-fed',
  0.6: 'fed',
  0.4: 'well-fed',
  0.2: 'full'
};

export const statusMultiplier: Status = {
  freeze: 2,
  sleep: 2,
  paralyze: 1.5,
  burn: 1.5,
  poison: 1.5,
  normal: 1
};

export const CATCH_MESSAGES: CatchMessage = {
  0: 'Oh no! The Pokemon broke free!',
  1: 'Aww! It appeared to be caught!',
  2: 'Argh! Almost had it!',
  3: 'Shoot! It was so close, too!',
  4: 'Gotcha! The Pokemon was caught!'
};

// Berries and their effects
export const BERRIES: CatchBerries = {
  'oran-berry': 'normal',
  'lum-berry': 'normal',
  'aspear-berry': 'freeze',
  'cheri-berry': 'paralyze',
  'chesto-berry': 'sleep',
  'pecha-berry': 'poison',
  'rawst-berry': 'burn'
};
export const HP_BERRIES: HPBerries = {
  'razz-berry': 0.1,
  'silver-razz-berry': 0.25,
  'golden-razz-berry': 0.5
};

export const BERRY_SPRITES: BerrySprites = mapKeyToSprite(BERRIES, HP_BERRIES);

// Pokeballs and their effects
export const POKEBALLS: Pokeballs = {
  'poke-ball': 1,
  'great-ball': 1.5,
  'ultra-ball': 2,
  'park-ball': 3,
  'master-ball': 255
};

export const POKEBALL_SPRITES: PokeballSprites = mapKeyToSprite(POKEBALLS);

// Other Sprites
export const ESCAPE_ROPE: string = spriteLink('escape-rope');
export const BAG_SPRITE: string =
  'https://cdn.bulbagarden.net/upload/7/76/Professor_Birch_Bag.png';
export const SILVER_RAZZ_BERRY: string =
  'https://cdn.bulbagarden.net/upload/f/fb/Bag_Silver_Razz_Berry_Sprite.png';
export const GOLDEN_RAZZ_BERRY: string =
  'https://cdn.bulbagarden.net/upload/7/7e/Bag_Golden_Razz_Berry_Sprite.png';
export const SILVER_NANAB_BERRY: string =
  'https://cdn.bulbagarden.net/upload/3/3a/Bag_Silver_Nanab_Berry_Sprite.png';
export const GOLDEN_NANAB_BERRY: string =
  'https://cdn.bulbagarden.net/upload/3/34/Bag_Golden_Nanab_Berry_Sprite.png';

export const MISSINGNO: MissingNo = {
  id: '???',
  species: 'MissingNo.',
  sprite: 'https://cdn.bulbagarden.net/upload/9/98/Missingno_RB.png',
  title: '????',
  flavor_text: '',
  catch_rate: '???',
  name: 'MissingNo.'
};

// Helper Functions
function spriteLink(item: string): string {
  if (item === 'silver-razz-berry') return SILVER_RAZZ_BERRY;
  else if (item === 'golden-razz-berry') return GOLDEN_RAZZ_BERRY;
  else if (item === 'silver-razz-berry') return SILVER_RAZZ_BERRY;
  else if (item === 'golden-nanab-berry') return GOLDEN_NANAB_BERRY;
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item}.png`;
}
/**
 * Creates a mapping object with links to each sprite from the PokeAPI.
 * @param obj Objects with keys to map to a sprite from the PokeAPI Github. Keys must match the url in the pokeapi
 */
function mapKeyToSprite(...args: { [key: string]: any }[]): any {
  let acc: any = {};
  for (let obj of args) {
    for (let key in obj) {
      if (!acc.hasOwnProperty(key)) acc[key] = spriteLink(key);
    }
  }
  return acc;
}
