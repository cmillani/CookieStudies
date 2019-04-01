function submitCookieForm(path, htmlClass) {
    let selected = null;
    let inputs = $(`input.${htmlClass}`);
    let buttons = inputs.filter("[type=radio]");
    for(let button of buttons) {
        if (button.checked) {
            selected = button.value;
        }
    }

    let checkBoxes = inputs.filter("[type=checkbox]");
    
    let requestData = {
        secure: (checkBoxes.filter("[name=isSecureOption]")[0] || false).checked,
        httpOnly: (checkBoxes.filter("[name=isHttpOnly]")[0] || false).checked,
        selected: selected
    };

    var http = new XMLHttpRequest();
    http.open("POST", path, true);
    http.setRequestHeader("Content-type","application/json");
    http.send(JSON.stringify(requestData));
    http.onload = function() {
        console.log("Sent!");
        reloadValues();
    };
}

function reloadValues() {
    for(let element of $('.updatable')) {
        element.innerHTML = `The value of the ${element.title} cookie is "${getCookieWithName(element.title)}"`;
    }
    var secure = false;
    if (location.protocol === 'https:') { 
        secure = true;
    }
    for (let element of $('.httpsIndicator')) {
        element.innerHTML = `Conection is secure: ${secure ? "Yes": "No"}`;
    }

    for (let element of $('.linkToHttps')) {
        element.innerHTML = `<a href=${'https:' + window.location.href.substring(window.location.protocol.length)}> Access with SSL <\a>`;
    }

    for (let element of $('.linkToHttp')) {
        element.innerHTML = `<a href=${'http:' + window.location.href.substring(window.location.protocol.length)}> Access without SSL <\a>`;
    }
}

function getCookieWithName(name) {
    let cookiesArray = document.cookie.split("; ").map(value => value.split("="));
    let cookies = {};
    for (let cookie of cookiesArray) {
        cookies[cookie[0]] = cookie[1];
    }
    return cookies[name] || "-";
}

setInterval(reloadValues, 1000);