const express = require('express');

const router = express.Router();

const productQueries = require('../db/queries/products');


// Read all products
router.get('/', (req, res) => {
  productQueries
    .getAll()
    .then(products => res.json(products))
    .catch(error => {
      res
        .status(500)
        .json({ message: 'Error reading products', error: error.message });
    });
});

// Read one products
router.get('/:id', (req, res) => {
  productQueries
    .getById(req.params.id)
    .then(product => {
      if (!product) {
        return res.json("City not found");
      }
      return res.json(product);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'Error reading product', error: error.message });
    });
});

// buy products
router.post('/', (req, res) => {
  // Get data from request
  const { user_id, product_id } = req.body;
  productQueries
    .buyProduct(user_id, product_id)
    .then((product) => res.json(product))
    .catch(error => {
      res
        .status(500)
        .json({ message: 'Error creating product buy process', error: error.message });
    });
});



module.exports = router;