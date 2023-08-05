const db = require('../connection');

// Get all users
const getAll = () => {
  const queryString = `SELECT * FROM users ORDER BY id ;`;
  return db.query(queryString)
    .then(res => res.rows);
};

// Get one user
const getById = (id) => {
  const queryString = `SELECT * FROM users WHERE id = $1;`;
  const values = [id];
  return db.query(queryString, values)
    .then(res => res.rows[0]);
};

// Create new user
const create = (first_name, last_name, email, password, city) => {
  // Start the transaction
  return db.query('BEGIN') 
    .then(() => {
      const userQueryString = `
        INSERT INTO users (first_name, last_name, email, password_digest, city)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
      `;
      const userValues = [first_name, last_name, email, password, city];

      return db.query(userQueryString, userValues)
        .then(userRes => {
          const user = userRes.rows[0];
          const cityUserQueryString = `
            INSERT INTO city_user (user_id, city_id)
            VALUES ($1, $2);
          `;
          const cityUserValues = [user.id, city];

          return db.query(cityUserQueryString, cityUserValues)
            .then(() => {
              // Commit the transaction
              return db.query('COMMIT'); 
            })
            .then(() => {
              return user;
            });
        });
    })
    .catch(error => {
      // Rollback the transaction in case of error
      db.query('ROLLBACK'); 
      throw error;
    });
};


// Update user
const update = (id, first_name, last_name, city) => {
  return db.query('BEGIN') 
    .then(() => {
      const queryString = `
      UPDATE users 
      SET first_name = $2, 
          last_name = $3, 
          city = $4
      WHERE id = $1
      RETURNING *;
      `;
      const values = [id, first_name, last_name, city];

      return db.query(userQueryString, userValues)
        .then(userRes => {
          const user = userRes.rows[0];
          const cityUserQueryString = `
            UPDATE city_user (user_id, city_id)
            VALUES ($1, $2);
          `;
          const cityUserValues = [user.id, city];

          return db.query(cityUserQueryString, cityUserValues)
            .then(() => {
              // Commit the transaction
              return db.query('COMMIT'); 
            })
            .then(() => {
              return user;
            });
        });
    })
    .catch(error => {
      // Rollback the transaction in case of error
      db.query('ROLLBACK'); 
      throw error;
    });
};

// Delete user
const remove = (id) => {
  const queryString = `DELETE FROM users WHERE id = $1;`;
  const values = [id];
  return db.query(queryString, values);
};


module.exports = { getAll, getById, create, update, remove };