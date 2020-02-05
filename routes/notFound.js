const express = require('express');
const router = express.Router();

router.get('/404', (req, res) => {
  res.render('notFound');
});

module.exports = router;
