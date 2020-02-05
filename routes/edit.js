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

module.exports = router;
