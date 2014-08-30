var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
//  var google = "https://docs.google.com/forms/d/14lxQyQls7jYzAktg1f7U6XiRein6GypkOpl_bK5P-Bs/viewform?usp=send_form";
  res.render('index');
});

module.exports = router;
