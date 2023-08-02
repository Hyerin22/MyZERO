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
  const user = { id: 1 };
  req.session.user = user;
  console.log(req.session)
  res.json(user);
});

app.post('/api/login/1', (req, res) => {
  const user = { id: 2 };
  req.session.user = user;
  res.json(user);
});

app.post('/api/logout', (req, res) => {
  req.session = null;
  res.json("Cookie removed")
})


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
