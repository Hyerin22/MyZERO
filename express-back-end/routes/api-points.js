const express = require('express');

const router = express.Router();

const pointQueries = require('../db/queries/points');


// Read all point
router.get('/', (req, res) => {
  pointQueries
    .getAll()
    .then(point => res.json(point))
    .catch(error => {
      res
        .status(500)
        .json({ message: 'Error reading point', error: error.message });
    });
});

// Read one user's each month point
router.get('/:id/month', (req, res) => {
  pointQueries
    .eachMonthPoint(req.params.id)
    .then(point => {
      // If  user not found
      if (!point) {
        return res.json("point not found");
      }
      return res.json(point);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'Error reading point', error: error.message });
    });
});


// Create point
router.post('/', (req, res) => {
  // Get data from request
  const { user_id, city_id, point } = req.body;
  pointQueries
    .create(user_id, city_id, point)
    .then((point) => res.json(point))
    .catch(error => {
      res
        .status(500)
        .json({ message: 'Error creating point', error: error.message });
    });
});


module.exports = router;