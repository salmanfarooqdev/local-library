var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/catalog");
  // res.render('layout');
});

module.exports = router;
