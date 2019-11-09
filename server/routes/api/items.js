const express = require('express');
const router = express.Router();
const items = require('../../data/item_list');

// Get All items
router.get('/', (req, res) => res.json(items));

// Get Single item
router.get('/:id', (req, res) => {
  const found = items.some(item => item.id === parseInt(req.params.id));

  if (found) {
    res.json(items.filter(item => item.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No item with the id of ${req.params.id}` });
  }
});

// Paginate Items
router.get('/page/:page_number/amount/:page_amount', (req, res) => {
  const page = parseInt(req.params.page_number) - 1;
  const pageAmount = parseInt(req.params.page_amount);
  const found = items.slice(page * pageAmount, (page + 1) * pageAmount);

  if (found) {
    setTimeout(() => {
      res.json(found);
    }, 1000)
  } else {
    res.status(400).json({ msg: `No items with the specified parameters` });
  }
});

module.exports = router;
