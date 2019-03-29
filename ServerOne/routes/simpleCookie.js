var express = require('express');
var viewEnvironmentBuilder = require('../services/viewEnvironmentBuilder')
var {cookieNames} = require('../persistence/configurations')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    viewEnvironmentBuilder.buildServerNameVariables(req, res);
    viewEnvironmentBuilder.buildSessionRadioButton(req, res)
    res.render('simpleCookie')
});

router.post('/', function(req, res, next) {
    res.cookie(cookieNames.sessionSelectedRadio, req.body.selected)
    res.send();
});

module.exports = router;
