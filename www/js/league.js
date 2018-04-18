function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.pandascore.co/lol/champions.json?token=psPK5jHHbwepozs5tpNXkthrjpsqJYjqRJaLGgdF6mgoQw1SX5g", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
}