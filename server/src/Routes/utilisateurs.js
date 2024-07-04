const express = require('express');
const router = express.Router();

// Define your route handlers
router.get('/', (req, res) => {
  res.send('List of users');
});

module.exports = router;
