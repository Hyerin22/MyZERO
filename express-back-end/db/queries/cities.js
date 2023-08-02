const db = require('../connection');

// Get all cities
const getAll = () => {
  const queryString = `SELECT * FROM cities ORDER BY id;`;
  return db.query(queryString)
    .then(res => res.rows);
};

// Counting city's users
const howManyUsers = (city_id) => {
  const queryString = `
    SELECT
      city_id,
      COUNT(user_id) AS user_count
    FROM city_user
    WHERE city_id = $1
    GROUP BY city_id;
  `;
  const values = [city_id];
  return db.query(queryString, values)
    .then(res => res.rows[0]);
};

// Get how much collected points in each month
const howMuchPoint = (city_id, current_month) => { 
  const queryString = `
  SELECT
    c.id AS city_id,
    c.name AS city_name,
    SUM(p.point) AS total_points
  FROM cities c
  LEFT JOIN points p ON c.id = p.city_id AND EXTRACT(MONTH FROM p.date) = $1
  WHERE c.id = $2
  GROUP BY c.id, c.name;
  `;
  const values = [current_month, city_id]; 
  return db.query(queryString, values)
    .then(res => res.rows);
};




// top 3 city
const topThreeCities = (month) => {
  const queryString = `
  SELECT
    c.id AS city_id,
    c.name AS city_name,
    COUNT(u.id) AS user_count,
    SUM(p.point) AS total_points,
    SUM(p.point) / COUNT(u.id) AS points_per_user
  FROM cities c
  LEFT JOIN users u ON c.id = u.city_id
  LEFT JOIN points p ON u.id = p.user_id AND EXTRACT(MONTH FROM p.date) = $1
  GROUP BY c.id, c.name
  ORDER BY points_per_user DESC
  LIMIT 3;
  `;
  const values = [month]; 
  return db.query(queryString, values)
    .then(res => res.rows);
};



module.exports = { getAll, howManyUsers, howMuchPoint, topThreeCities };