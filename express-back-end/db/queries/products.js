const db = require('../connection');

// Get all products
const getAll = () => {
  const queryString = `SELECT * FROM products ORDER BY name;`;
  return db.query(queryString)
    .then(res => res.rows);
};

// Get one products
const getById = (id) => {
  const queryString = `SELECT * FROM products WHERE id = $1;`;
  const values = [id];
  return db.query(queryString, values)
    .then(res => res.rows[0]);
};

// buy products and create usage
const buyProduct = (user_id, product_id) => {
  const queryString = `
    INSERT INTO 
    usage (user_id, product_id)
    VALUES ($1, $2)
    RETURNING *;
  `;
  const values = [user_id, product_id];
  return db.query(queryString, values)
    .then(res => res.rows[0]);
};


module.exports = { getAll, getById, buyProduct };