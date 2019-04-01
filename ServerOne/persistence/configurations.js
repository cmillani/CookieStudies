
let applicationName = process.env.APPLICATION_NAME || 'Server One';
let cookieNames = {
    sessionSelectedRadio: "sessionSelectedRadio",
    permanentSelectedRadio: "permanentSelectedRadio"
};

module.exports = {applicationName, cookieNames};