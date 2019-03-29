
let applicationName = process.env.APPLCIATION_NAME || 'Server One';
let cookieNames = {
    sessionSelectedRadio: "sessionSelectedRadio",
    permanentSelectedRadio: "permanentSelectedRadio"
};

module.exports = {applicationName, cookieNames};