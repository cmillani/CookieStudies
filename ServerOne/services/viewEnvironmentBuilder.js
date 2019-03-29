let {applicationName, cookieNames} = require('../persistence/configurations')

function buildServerNameVariables(req, res) {
    res.locals.title = applicationName
}

function buildSessionRadioButton(req, res) {
    res.locals[cookieNames.sessionSelectedRadio] = req.cookies[cookieNames.sessionSelectedRadio]
}

module.exports = {buildServerNameVariables, buildSessionRadioButton}