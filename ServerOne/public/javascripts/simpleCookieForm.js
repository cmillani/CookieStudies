function submitCookieForm() {
    let selected = null;
    for(button of $("input[type=radio]")) {
        if (button.checked) {
            selected = button.value;
        }
    }
    
    let requestData = {
        selected: selected
    };

    var http = new XMLHttpRequest();
    http.open("POST", "/simpleCookie", true);
    http.setRequestHeader("Content-type","application/json");
    http.send(JSON.stringify(requestData))
    http.onload = function() {
        console.log("Sent!")
    }
}