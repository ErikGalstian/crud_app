const express = require('express');
const router = express.Router();

// Render edit page
router.get('/edit', (req, res) => {
  if (req.session.item) {
    const item = req.session.item; // Getting the item from session
    res.render('edit', item);
  } else {
    res.redirect('404'); // <--- Redirect to 404 page in case user manually goes to /edit route
  }
});

// PUT - update item
router.put('/edit/update', (req, res) => {
  global.itemList.find(el => el.id === +req.body.id).text = req.body.text;
  console.log(`Updated the record with id: ${req.body.id}`);
  res.send(`Updated the record with id: ${req.body.id}`);
});

module.exports = router;
