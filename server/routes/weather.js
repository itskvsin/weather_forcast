// server/routes/weather.js
const express = require('express');
const router = express.Router();

router.get('/weather', (req, res) => {
  // TODO: Implement weather API call
  res.json({ message: 'Weather route' });
});

module.exports = router;