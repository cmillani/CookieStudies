var express = require('express');
var viewEnvironmentBuilder = require('../services/viewEnvironmentBuilder');
var {cookieNames} = require('../persistence/configurations');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    viewEnvironmentBuilder.buildServerNameVariables(req, res);
    viewEnvironmentBuilder.buildSessionRadioButton(req, res);
    viewEnvironmentBuilder.buildPermanentRadioButton(req, res);
    viewEnvironmentBuilder.buildOtherServerIframe(req, res);
    res.render('iframeView');
});

module.exports = router;
