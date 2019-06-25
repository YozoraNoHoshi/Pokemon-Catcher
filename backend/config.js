require('dotenv').config();

const SECRET = process.env.SECRET_KEY || 'test';

const PORT = +process.env.PORT || 3001;

let DB_URI;

if (process.env.NODE_ENV === 'test') {
  DB_URI = 'pokesim-test';
} else {
  DB_URI = process.env.DATABASE_URL || 'pokesim';
}

const POKEURL = 'https://pokeapi.co/api/v2';

module.exports = {
  SECRET,
  POKEURL,
  PORT,
  DB_URI
};
