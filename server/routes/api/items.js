const express = require('express');
const router = express.Router();
const items = require('../../data/item_list');

// Get All items
router.get('/', (req, res) => res.json(items));

// Paginate Items
router.get('/p/:start/:end', (req, res) => {

  const start = parseInt(req.params.start);
  const end = parseInt(req.params.end);
  const found = items.slice(start, end);

  if (found) {
    res.json(found);
  } else {
    res.status(400).json({ msg: `No item with the id of ${req.params.id}` });
  }
});

module.exports = router;