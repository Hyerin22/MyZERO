const db = require('../connection');

// Get all city users
// const getAll = () => {
//   const queryString = `SELECT * FROM city_user;`;
//   return db.query(queryString)
//     .then(res => res.rows);
// };

// Get city's user
const getById = (city_id) => {
  const queryString = `SELECT * FROM city_user WHERE city_id = $1;`;
  const values = [city_id];
  return db.query(queryString, values)
    .then(res => res.rows);
};

// Get user count for all cities
const howManyUsers = () => {
  const queryString = `
    SELECT
      city_id,
      COUNT(user_id) AS user_count
    FROM city_user
    GROUP BY city_id
    ORDER BY city_id;
  `;
  return db.query(queryString)
    .then(res => res.rows);
};


module.exports = { howManyUsers, getById };