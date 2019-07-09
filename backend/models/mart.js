const db = require('../db');

class Mart {
  static async getStock(category) {
    let query = `SELECT * FROM items`;
    let values = [];
    if (category) {
      values.push(category);
      query += ' WHERE category = $1';
    }
    const result = await db.query(query, values);
    return result.rows;
  }
}

module.exports = Mart;
