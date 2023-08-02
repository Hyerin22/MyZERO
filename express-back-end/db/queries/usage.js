const db = require('../connection');

// Get all user's usage
const getAll = () => {
  const queryString = `SELECT * FROM usage ORDER BY user_id;`;
  return db.query(queryString)
    .then(res => res.rows);
};

// Get one user's usage
const getById = (user_id) => {
  const queryString = `
  SELECT
    u.*,
    p1.name AS product_name,
    p1.store AS product_store,
    p1.point AS spend_point,
    p2.point AS earned_point
  FROM usage u
  LEFT JOIN products p1 ON u.product_id = p1.id
  LEFT JOIN points p2 ON u.point_id = p2.id
  WHERE u.user_id = $1;
  `;
  const values = [user_id];
  return db.query(queryString, values)
    .then(res => {
      // divide the data by product_id and point_id
      const spendData = res.rows.filter(row => row.product_id !== null);
      const earnedData = res.rows.filter(row => row.point_id !== null);

      return {
        spendData,
        earnedData,
      };
    });
};



// Get one user's total points
const totalPoints = (user_id) => {
  const queryString1 = `
    SELECT
      COALESCE(SUM(p1.point), 0) AS spend_point
    FROM usage u
    LEFT JOIN products p1 ON u.product_id = p1.id
    WHERE u.user_id = $1;
  `;

  const queryString2 = `
    SELECT
      COALESCE(SUM(p2.point), 0) AS earned_point
    FROM usage u
    LEFT JOIN points p2 ON u.point_id = p2.id
    WHERE u.user_id = $1;
  `;

  const values = [user_id];

  return Promise.all([
    db.query(queryString1, values).then(res => res.rows[0].spend_point),
    db.query(queryString2, values).then(res => res.rows[0].earned_point),
  ]).then(([spend_point, earned_point]) => ({
    user_id: user_id,
    total_point: earned_point - spend_point,
    earned_point: earned_point,
    spend_point: spend_point, 
  }));
};



// Create new usage
const create = (user_id, product_id, point_id) => {
  const queryString = `
    INSERT INTO usage (user_id, product_id, point_id)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [user_id, product_id, point_id];
  return db.query(queryString, values)
    .then(res => res.rows[0]);
};



module.exports = { getAll, getById, create, totalPoints};