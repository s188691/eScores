var api = 'https://api.pandascore.co/';
var game = 'videogames';
var apiKey = '?token=psPK5jHHbwepozs5tpNXkthrjpsqJYjqRJaLGgdF6mgoQw1SX5g';

function setup() {
	var url = api + game + apiKey;
	loadJSON(url, gotData);
}
	
function gotData(data) {
	println(data);
}
