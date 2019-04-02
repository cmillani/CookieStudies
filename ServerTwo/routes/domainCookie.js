var express = require('express');
var viewEnvironmentBuilder = require('../services/viewEnvironmentBuilder');
var {cookieNames} = require('../persistence/configurations');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    viewEnvironmentBuilder.buildServerNameVariables(req, res);
    viewEnvironmentBuilder.buildSessionRadioButton(req, res);
    viewEnvironmentBuilder.buildPermanentRadioButton(req, res);
    res.render('domainCookie');
});

module.exports = router;
