const express = require('express');
const router = express.Router();
const items = require('../../data/item_list');

// Gets All items
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


module.exports = router;