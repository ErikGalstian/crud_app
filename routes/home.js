const express = require('express');
const router = express.Router();

// GET Render homepage
router.get('/', (req, res) => {
  res.render('home');
});

// POST - redirect to /edit route
router.post('/edit', (req, res) => {
  const text = global.itemList.find(el => el.id === +req.body.id).text; // <--- Find the text with passed id
  // Setting up the session with item data before redirect
  req.session.item = {
    id: +req.body.id,
    text: text
  };
  res.redirect('/edit');
});

// GET - gets the counter
router.get('/counter', (req, res) => {
  res.send(JSON.stringify(global.counter));
});

module.exports = router;
