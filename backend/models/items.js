const db = require('../db');

class Items {
  static async getAllItems(table = 'pokeballs') {
    if (table !== 'pokeballs') table = 'berries';
    let result = await db.query(`SELECT * FROM $1`, [table]);
    return result.rows;
  }

  static async getSpecificItem(item, table = 'pokeballs') {
    if (table !== 'pokeballs') table = 'berries';
    let result = await db.query(`SELECT * FROM $1 WHERE name = $2`, [
      table,
      item
    ]);
    return result.rows[0];
  }
}

module.exports = Items;
