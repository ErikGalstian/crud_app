const express = require('express');
const router = express.Router();

// POST - create new todo
router.post('/api/todos', (req, res) => {
  global.counter += 1;
  global.itemList.push(req.body);
  console.log(`Added record with id: ${req.body.id}`);
  res.send(`Added record with id: ${req.body.id}`);
});

// GET - fetch all todos
router.get('/api/todos', (req, res) => {
  res.send([global.itemList, global.counter]);
});

// PUT - send put request to update todo
router.put('/api/todos', (req, res) => {
  global.itemList.find(el => el.id === +req.body.id).text = req.body.text;
  console.log(`Updated the record with id: ${req.body.id}`);
  res.send(`Updated the record with id: ${req.body.id}`);
});

// DELETE - send delete request to remove current todo
router.delete('/api/todos', (req, res) => {
  for (let i = 0; i < global.itemList.length; i++) {
    if (global.itemList[i].id == req.body.id) {
      console.log(`Deleted record with id: ${req.body.id}`);
      global.itemList.splice(i, 1);
      break;
    }
  }
  res.send(`Deleted record with id: ${req.body.id}`);
});

module.exports = router;
