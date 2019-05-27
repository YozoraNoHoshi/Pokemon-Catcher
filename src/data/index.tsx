import {
  Pokeballs,
  MissingNo,
  HPBerries,
  CatchBerries,
  Berries,
  Status,
  CatchMessage
} from '..';

function spriteLink(item: string): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item}.png`;
}

export const POKEBALLS: Pokeballs = {
  'poke-ball': 1,
  'great-ball': 1.5,
  'ultra-ball': 2,
  'park-ball': 3,
  'master-ball': 255
};

// Change to be benchmarks - each benchmark has a higher catch rate
export const HP_MULT = {
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
  3: 'Shoot! It was so close, too!', // 'Gah! It was so close, too!'
  4: 'Gotcha! The Pokemon was caught!'
};

export const BERRIES: CatchBerries = { 'oran-berry': 'normal' };
export const HP_BERRIES: HPBerries = { 'razz-berry': 0.1 };

export const BERRY_SPRITES: Berries = {
  'razz-berry': spriteLink('razz-berry'),
  'oran-berry': spriteLink('oran-berry')
};

export const POKEBALL_SPRITES: Pokeballs = {
  'poke-ball': spriteLink('poke-ball'),
  'great-ball': spriteLink('great-ball'),
  'ultra-ball': spriteLink('ultra-ball'),
  'park-ball': spriteLink('park-ball'),
  'master-ball': spriteLink('master-ball')
};

export const BAG_SPRITE: string =
  'https://cdn.bulbagarden.net/upload/7/76/Professor_Birch_Bag.png';

export const ESCAPE_ROPE: string = spriteLink('escape-rope');

export const MISSINGNO: MissingNo = {
  id: '???',
  species: 'MissingNo.',
  sprite: 'https://cdn.bulbagarden.net/upload/9/98/Missingno_RB.png',
  title: '????',
  flavor_text: '',
  catch_rate: '???',
  name: 'MissingNo.'
};
