var express = require('express');
var viewEnvironmentBuilder = require('../services/viewEnvironmentBuilder');
var {cookieNames} = require('../persistence/configurations');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    viewEnvironmentBuilder.buildServerNameVariables(req, res);
    viewEnvironmentBuilder.buildSessionRadioButton(req, res);
    viewEnvironmentBuilder.buildPermanentRadioButton(req, res);
    res.render('sessionAndPermanentCookie');
});

router.post('/', function(req, res, next) {
    let options = {
        httpOnly: req.body.httpOnly,
        secure: req.body.secure,
        domain: req.body.domain,
        maxAge: 10000
    };
    res.cookie(cookieNames.permanentSelectedRadio, req.body.selected, options);
    res.send();
});

module.exports = router;
