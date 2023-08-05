const db = require('../connection');

// Function to find a user by email
const findUserByEmail = async (email) => {
  try {
    const queryText = 'SELECT * FROM users WHERE email = $1';
    const { rows } = await db.query(queryText, [email]);
    console.log("여기는 백앤드", rows[0]);
    return rows[0]; 
  } catch (error) {
    console.error('Error finding user by email:', error);
    throw error;
  }
};

// Function to validate password
const isValidPassword = (user, password) => {
  return user && user.password_digest === password;
};

module.exports = {
  findUserByEmail,
  isValidPassword,
};
