var api = 'https://api.pandascore.co/';
var game = 'videogames';
var apiKey = '?token=psPK5jHHbwepozs5tpNXkthrjpsqJYjqRJaLGgdF6mgoQw1SX5g';

function setup() {
	var url = api + game + apiKey;
	loadJSON(url, gotData);
	
function gotData(




function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.pandascore.co/lol/champions.json?token=psPK5jHHbwepozs5tpNXkthrjpsqJYjqRJaLGgdF6mgoQw1SX5g", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
	document.getElementById("liga").innerHTML = response;
}