const express = require('express');

const router = express.Router();

const cityUserQueries = require('../db/queries/cityUser');



// Read all city-user
router.get('/', (req, res) => {
  cityUserQueries
    .getAll()
    .then(cityUser => res.json(cityUser))
    .catch(error => {
      res
        .status(500)
        .json({ message: 'Error reading city user', error: error.message });
    });
});

// Read one city's user
router.get('/:id', (req, res) => {
  cityUserQueries
    .getById(req.params.id)
    .then(user => {
      // If  user not found
      if (!user) {
        return res.json("City's user not found");
      }
      return res.json(user);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'Error reading user', error: error.message });
    });
});


module.exports = router;