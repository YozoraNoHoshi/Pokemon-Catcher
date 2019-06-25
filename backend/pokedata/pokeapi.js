const db = require('../db');
const env = require('../config');
const axios = require('axios');
const Pokemon = require('../models/pokemon');
const fs = require('fs');
const {
  getDescription,
  buildMultipleInsert,
  uniquePokemon,
  generateHabitatPairs
} = require('../helpers/helpers');

class PokeAPI {
  static async doIt() {
    await PokeAPI.getAllHabitats();
    let end = await PokeAPI.splitPokemonFiles();
    let counter = 0;
    let timeout = setInterval(async () => {
      if (counter <= end) {
        let file = `pokemon-${counter}.json`;
        await PokeAPI.getAllPokemons(file);
        counter++;
        fs.rmdir(file);
      } else {
        clearInterval(timeout);
        console.log('Completed pokemon insert');
      }
    }, 61000);
    await PokeAPI.insertIntoDB();
    fs.rmdir('pokemon.json');
    fs.rmdir('habitats.json');

    console.log('Completed habitat insert');
  }

  static async getAllHabitats() {
    let response = await Promise.all([
      axios.get(`${env.POKEURL}/pal-park-area`),
      Pokemon.getUniquePokemonNames()
    ]);
    let habitats = await Promise.all(
      response[0].data.results.map(area =>
        PokeAPI.getSpecificHabitat(area.name)
      )
    );
    let pokemon = uniquePokemon(habitats, response[1]);
    if (pokemon.length === 0) return;
    // await PokeAPI.multipleInsert('habitats', ['name', 'description'], habitats);

    fs.writeFile('pokemon.json', JSON.stringify(pokemon), err => {
      if (err) process.exit(1);
      console.log('written files');
    });
    fs.writeFile('habitats.json', JSON.stringify(habitats), err => {
      if (err) process.exit(1);
      console.log('written files');
    });
  }

  static async splitPokemonFiles() {
    // length should be 493
    let pokemon = JSON.parse(fs.readFileSync('pokemon.json'));
    let noFiles = Math.floor(pokemon.length / 50);
    let range = [];
    let counter = 0;
    while (counter <= noFiles) {
      range.push(counter);
      counter++;
    }
    for (let index of range) {
      let start = index * 50;
      let item = pokemon.slice(start, Math.min(start + 50, pokemon.length));
      fs.writeFile(`pokemon-${index}.json`, JSON.stringify(item), err => {
        if (err) process.exit(1);
        console.log(`wrote to file pokemon-${index}.json`);
      });
    }
    return noFiles;
  }

  static async getAllPokemons(file) {
    let pokemon = JSON.parse(fs.readFileSync(file));

    let pokemons = await Promise.all(pokemon.map(p => PokeAPI.getPokemon(p)));

    await PokeAPI.multipleInsert(
      'pokemon',
      ['id', 'name', 'species', 'title', 'flavor_text', 'catch_rate', 'sprite'],
      pokemons
    );
    console.log('Inserted');
  }

  static async insertIntoDB() {
    let habitats = JSON.parse(fs.readFileSync('habitats.json'));
    await PokeAPI.multipleInsert(
      'pokeHabitats',
      ['habitat', 'pokemon'],
      generateHabitatPairs(habitats)
    );
    console.log('inserted into db');
  }

  static async getSpecificHabitat(areaName) {
    let response = await axios.get(`${env.POKEURL}/pal-park-area/${areaName}`);
    let name = response.data.name;
    let description = getDescription(response.data.name);
    let pokemon = response.data.pokemon_encounters.map(
      p => p.pokemon_species.name
    );
    return { name, description, pokemon };
  }

  static async getPokemon(pokemonName) {
    // We assume the habitat already exists in our local database.
    let response = await axios.get(
      `${env.POKEURL}/pokemon-species/${pokemonName}`
    );
    let {
      id,
      name,
      capture_rate,
      flavor_text_entries,
      genera,
      names
    } = response.data;
    let sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    let title = genera.find(p => {
      return p.language.name === 'en';
    }).genus;
    let flavor_text = flavor_text_entries.find(p => {
      return p.language.name === 'en';
    }).flavor_text;
    let species = names.find(p => {
      return p.language.name === 'en';
    }).name;
    return {
      id,
      name,
      title,
      sprite,
      catch_rate: capture_rate,
      flavor_text,
      species
    };
  }

  static async getPokeballs() {
    let response = await axios.get(
      `${env.POKEURL}/item-category/standard-balls`
    );
    let pokeballs = await Promise.all(
      response.data.items.map(p => axios.get(p.url))
    );
    let pokeballData = pokeballs.map(p => {
      let { flavor_text_entries, cost, name, names, sprites } = p.data;
      let flavor_text = flavor_text_entries.find(p => {
        return p.language.name === 'en';
      }).text;
      let species = names.find(p => {
        return p.language.name === 'en';
      }).name;
      let sprite = sprites.default;
      return { name, species, multiplier: 1, cost, flavor_text, sprite };
    });
    await PokeAPI.multipleInsert(
      'pokeballs',
      ['name', 'species', 'multiplier', 'cost', 'flavor_text', 'sprite'],
      pokeballData
    );
    console.log('Inserted', pokeballData);
  }

  static async multipleInsert(table, columns, items) {
    let { query, values } = buildMultipleInsert(table, columns, items);
    let result = await db.query(query, values);
    return result.rows;
  }
}

module.exports = PokeAPI;
