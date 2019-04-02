var express = require('express');
var viewEnvironmentBuilder = require('../services/viewEnvironmentBuilder')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  viewEnvironmentBuilder.buildServerNameVariables(req, res);
  res.render('index');
});

module.exports = router;
