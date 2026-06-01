'use strict';
const express = require('express');
const router = express.Router();

router.get('/status', (req, res) => {
  res.json({ status: 'ok', app: 'Contoso', version: '1.0.0' });
});

module.exports = router;
