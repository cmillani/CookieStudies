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
        httpOnly: checkBoxes.filter("[name=isHttpOnly]")[0].checked,
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