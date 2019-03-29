function submitCookieForm(path, htmlClass) {
    let selected = null;
    for(let button of $(`.${htmlClass}`)) {
        if (button.checked) {
            selected = button.value;
        }
    }
    
    let requestData = {
        selected: selected
    };

    var http = new XMLHttpRequest();
    http.open("POST", path, true);
    http.setRequestHeader("Content-type","application/json");
    http.send(JSON.stringify(requestData));
    http.onload = function() {
        console.log("Sent!");
    };
}