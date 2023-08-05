require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8080;

// Enable Cookie Sessions
const cookieSession = require('cookie-session');    // for Client Cookie Sessions
const session = cookieSession({ name: 'session', keys: ["secret"], sameSite: true });

// Express Configuration
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(session);


// Sample GET route
app.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));


const { findUserByEmail, isValidPassword } = require('./db/queries/login');
const userRoutes = require('./routes/api-users');
const usageRoutes = require('./routes/api-usage');
const citiesRoutes = require('./routes/api-cities');
const cityUserRoutes = require('./routes/api-city-user');
const pointRoutes = require('./routes/api-points');
const productRoutes = require('./routes/api-products');

app.use('/api/users', userRoutes);
app.use('/api/usage', usageRoutes);
app.use('/api/cities', citiesRoutes);
app.use('/api/city-user', cityUserRoutes);
app.use("/api/points", pointRoutes);
app.use("/api/products", productRoutes);



app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = findUserByEmail(email);

  console.log("password", password);
  if (user && isValidPassword(user, password)) {

    // Set the cookie with the user's ID
    res.cookie('user_id', user.id);
    console.log("server.js res.data", res.data);

    // Respond with a success message or redirect the user to a dashboard page
    res.json({ userId: user.id, message: 'Login Successful!!' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/api/logout', (req, res) => {
  req.session = null;
  res.json("Cookie removed")
})


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
