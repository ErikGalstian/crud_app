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

// POST - add an item
router.post('/add', (req, res) => {
  global.counter += 1;
  global.itemList.push(req.body);
  console.log(`Added record with id: ${req.body.id}`);
  res.send(`Added record with id: ${req.body.id}`);
});

// DELETE - delete an item
router.delete('/delete', (req, res) => {
  for (let i = 0; i < global.itemList.length; i++) {
    if (global.itemList[i].id == req.body.id) {
      console.log(`Deleted record with id: ${req.body.id}`);
      global.itemList.splice(i, 1);
      break;
    }
  }
  res.send(`Deleted record with id: ${req.body.id}`);
});

// GET - get the list of items
router.get('/items', (req, res) => {
  res.send([global.itemList, global.counter]);
});

// GET - gets the counter
router.get('/counter', (req, res) => {
  res.send(JSON.stringify(global.counter));
});

module.exports = router;
