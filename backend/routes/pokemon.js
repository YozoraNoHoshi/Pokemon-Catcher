// BATTLE - Get random pokemon data from habitat

// POKEDEX - Get specific pokemon data from db, maybe pokemon habitats
// POKEDEX - Get all pokemon data in ID order, including habitats they live in

const express = require('express');
const router = new express.Router();
const Pokemon = require('../models/pokemon');

// Get all pokemon from local db
router.get('/', async function(req, res, next) {
  // Debug getting single pokemon only
  try {
    let pokemon = await Pokemon.getPokemon();
    return res.json({ pokemon });
  } catch (error) {
    return next(error);
  }
});

// Get a specific pokemon by either id or name
router.get('/:pokemon', async function(req, res, next) {
  try {
    let query = req.query.column || 'name';
    let pokemon = await Pokemon.getPokemon(req.params.pokemon, query);
    return res.json({ pokemon });
  } catch (error) {
    return next(error);
  }
});

// get habitats that this pokemon can be found in. Also get all the pokemon data.
router.get('/:pokemon/habitats', async function(req, res, next) {
  try {
    let query = req.query.column || 'name';
    let pokemon = await Pokemon.getHabitatsOfPokemon(req.params.pokemon, query);
    return res.json({ pokemon });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
