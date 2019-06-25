const express = require('express');
const router = new express.Router();
const Habitat = require('../models/habitat');

// get all habitat data (excluding pokemon that live there)
router.get('/', async function(req, res, next) {
  try {
    let habitats = await Habitat.getAllHabitats();
    return res.json({ habitats });
  } catch (error) {
    return next(error);
  }
});

// Get pokemon that live in the habitat
router.get('/:habitat/pokemon', async function(req, res, next) {
  try {
    let pokemon = await Habitat.getPokemonOfHabitats(req.params.habitat);
    return res.json({ pokemon });
  } catch (error) {
    return next(error);
  }
});
// Get a random pokemon for battling
router.get('/:habitat/battle', async function(req, res, next) {
  try {
    let pokemon = await Habitat.randomPokemonFromHabitat(req.params.habitat);
    return res.json({ pokemon });
  } catch (error) {
    return next(error);
  }
});

// get specific habitat data (including pokemon that live there)
router.get('/:habitat', async function(req, res, next) {
  try {
    let habitat = await Habitat.getSpecificHabitat(req.params.habitat);
    return res.json({ habitat });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
