let {applicationName, cookieNames} = require('../persistence/configurations');

function buildServerNameVariables(req, res) {
    res.locals.title = applicationName;
}

function buildSessionRadioButton(req, res) {
    res.locals[cookieNames.sessionSelectedRadio] = req.cookies[cookieNames.sessionSelectedRadio];
}

function buildPermanentRadioButton(req, res) {
    res.locals[cookieNames.permanentSelectedRadio] = req.cookies[cookieNames.permanentSelectedRadio];
}

module.exports = {buildServerNameVariables, buildSessionRadioButton, buildPermanentRadioButton};