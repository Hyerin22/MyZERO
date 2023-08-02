const express = require('express');

const router = express.Router();

const usageQueries = require('../db/queries/usage');


// Read all usage
router.get('/', (req, res) => {
  usageQueries
    .getAll()
    .then(usage => res.json(usage))
    .catch(error => {
      res
        .status(500)
        .json({ message: 'Error reading usage', error: error.message });
    });
});

// Read one user's usage
router.get('/:id', (req, res) => {
  usageQueries
    .getById(req.params.id)
    .then(usage => {
      // If  user not found
      if (!usage) {
        return res.json("usage not found");
      }
      return res.json(usage);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'Error reading usage', error: error.message });
    });
});


// Read one user's total points
router.get('/:id/total-point', (req, res) => {
  usageQueries
    .totalPoints(req.params.id)
    .then(usage => {
      // If  user not found
      if (!usage) {
        return res.json("usage not found");
      }
      return res.json(usage);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'Error reading usage', error: error.message });
    });
});

// Create usage
router.post('/', (req, res) => {
  // Get data from request
  const { user_id, product_id, point_id, date } = req.body;
  // Create usage
  usageQueries
    .create(user_id, product_id, point_id, date)
    .then((user) => res.json(user))
    .catch(error => {
      res
        .status(500)
        .json({ message: 'Error creating usage', error: error.message });
    });
});

module.exports = router;