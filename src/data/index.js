export const POKEBALLS = {
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
export const statusMultiplier = {
  freeze: 2,
  sleep: 2,
  paralyze: 1.5,
  burn: 1.5,
  poison: 1.5,
  normal: 1
};

export const CATCH_MESSAGES = {
  0: 'Oh no! The Pokemon broke free!',
  1: 'Aww! It appeared to be caught!',
  2: 'Argh! Almost had it!',
  3: 'Shoot! It was so close, too!', // 'Gah! It was so close, too!'
  4: 'Gotcha! The Pokemon was caught!'
};

export const BERRIES = { 'oran-berry': 'normal' };
export const HP_BERRIES = { 'razz-berry': 0.1 };

export const BERRY_SPRITES = {
  'razz-berry':
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/razz-berry.png',
  'oran-berry':
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/oran-berry.png'
};

export const POKEBALL_SPRITES = {
  'poke-ball':
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png',
  'great-ball':
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png',
  'ultra-ball':
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png',
  'park-ball':
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/park-ball.png',
  'master-ball':
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png'
};

export const BAG_SPRITE =
  'https://cdn.bulbagarden.net/upload/7/76/Professor_Birch_Bag.png';

export const ESCAPE_ROPE =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/escape-rope.png';

export const MISSINGNO = {
  id: '???',
  species: 'MissingNo.',
  sprite: 'https://cdn.bulbagarden.net/upload/9/98/Missingno_RB.png',
  title: '????',
  flavor_text: '',
  catch_rate: '???'
};
