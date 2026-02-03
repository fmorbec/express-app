const express = require('express');
const router = express.Router();
const createError = require('http-errors');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', function (req, res, next) {
  const { id } = req.query || null;

  if (!id) {
    return next(createError(403, 'User ID is required.'));
  }
  
  console.log('id', id);
  res.send('User profile page: ' + id);
});

module.exports = router;
