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

function buildOtherServerIframe(req, res) {
    let otherServer = applicationName === "Docker Server One" ? "http://servertwo.local" : "http://serverone.local";
    res.locals.otherServer = otherServer;
}

module.exports = {
    buildServerNameVariables, 
    buildSessionRadioButton, 
    buildPermanentRadioButton, 
    buildOtherServerIframe
};