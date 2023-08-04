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
  const user_id = req.params.id;
  const selectedMonths = req.query.months.split(','); 

  // Modify the database query to use the selectedMonths
  pointQueries
    .eachMonthPoint(user_id, selectedMonths)
    .then((point) => {
      // If point not found
      if (!point) {
        return res.json("point not found");
      }
      return res.json(point);
    })
    .catch((error) => {
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