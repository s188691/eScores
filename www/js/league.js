var api = 'https://api.pandascore.co/';
var game = 'videogames';
var apiKey = '?token=psPK5jHHbwepozs5tpNXkthrjpsqJYjqRJaLGgdF6mgoQw1SX5g';
var url = api + game + apiKey;

//function setup() {
//	var url = api + game + apiKey;
//	loadJSON(url, gotData);
//}
	
//function gotData(data) {
//	println(data);
//}
var gameContainer = document.getElementById("over");
var btn = document.getElementById("btn");

function dupa() {
	
var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', "https://api.pandascore.co/videogames/?token=psPK5jHHbwepozs5tpNXkthrjpsqJYjqRJaLGgdF6mgoQw1SX5g");
	ourRequest.onload = function() {
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData);
		};
	ourRequest.send();

};

function renderHTML(data) {
	var htmlString = "";
	
	for (i = 0; i < data.length; i++) {
		htmlString += "<p>" + data[i].name + "</p>";
	}
	
	gameContainer.insertAdjacentHTML('beforeend', htmlString);
}