// BATTLE - Get random pokemon data from habitat

const express = require('express');
const router = new express.Router();
const Mart = require('../models/mart');

// Get all pokemon from local db
router.get('/', async function(req, res, next) {
  // Debug getting single pokemon only
  try {
    let category = req.query.category;
    let stock = await Mart.getStock(category);
    return res.json({ stock });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
