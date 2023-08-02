const db = require('../connection');

// Get all points
const getAll = () => {
  const queryString = `SELECT * FROM points;`;
  return db.query(queryString)
    .then(res => res.rows);
};

// Get one user's each month point 
const eachMonthPoint = (user_id) => {
  const queryString = `
    SELECT
      EXTRACT(MONTH FROM date) AS month,
      SUM(point) AS month_points
    FROM points
    WHERE user_id = $1
    GROUP BY EXTRACT(MONTH FROM date)
    ORDER BY EXTRACT(MONTH FROM date);
  `;
  const values = [user_id];
  return db.query(queryString, values)
    .then(res => res.rows);
};

// Create new points
const create = (user_id, city_id, point) => {
  const createPointQuery = `
    INSERT INTO points (user_id, city_id, point)
    VALUES ($1, $2, $3)
    RETURNING id;
  `;
  const createUsageQuery = `
    INSERT INTO usage (user_id, point_id)
    VALUES ($1, $2)
    RETURNING *;
  `;

  return db.query(createPointQuery, [user_id, city_id, point])
    .then(res => {
      const point_id = res.rows[0].id;
      return db.query(createUsageQuery, [user_id, point_id])
        .then(res => res.rows[0]);
    });
};


module.exports = { getAll, create, eachMonthPoint };