const db = require('../connection');

// Get all city users
const getAll = () => {
  const queryString = `SELECT * FROM city_user;`;
  return db.query(queryString)
    .then(res => res.rows);
};

// Get city's user
const getById = (city_id) => {
  const queryString = `SELECT * FROM city_user WHERE city_id = $1;`;
  const values = [city_id];
  return db.query(queryString, values)
    .then(res => res.rows);
};



module.exports = { getAll, getById };