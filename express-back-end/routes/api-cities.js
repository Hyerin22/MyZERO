const express = require('express');

const router = express.Router();

const cityQueries = require('../db/queries/cities');


// Read all cities
router.get('/', (req, res) => {
  cityQueries
    .getAll()
    .then(users => res.json(users))
    .catch(error => {
      res
        .status(500)
        .json({ message: 'Error reading users', error: error.message });
    });
});

// Counting city's users
router.get('/:id', (req, res) => {
  cityQueries
    .howManyUsers(req.params.id)
    .then(city => {
      // If city not found
      if (!city) {
        return res.json("City not found");
      }
      return res.json(city);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'Error reading city', error: error.message });
    });
});

// Get the current month
const getCurrentMonth = () => {
  const today = new Date();
  return today.getMonth() + 1;
};
const currentMonth = Number(getCurrentMonth());

// Get how much collected points
router.get('/:id/point', (req, res) => {

  cityQueries
    .howMuchPoint(req.params.id, currentMonth)
    .then(point => {
      // If city's point not found
      if (!point) {
        return res.json("City's point not found");
      }
      return res.json(point);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'Error reading city point', error: error.message });
    });
});


// Get point top 3 city
router.get('/top/:id', (req, res) => {
  cityQueries
    .topThreeCities(req.params.id)
    .then(points => {
      // If city's points not found
      if (!points || points.length === 0) {
        return res.json("City's points not found");
      }
      return res.json(points); 
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'Error reading city points', error: error.message });
    });
});


module.exports = router;