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
    return result.rows.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
  }
}

module.exports = Mart;
