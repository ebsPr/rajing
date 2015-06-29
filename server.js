var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());
app.use(express.static(__dirname + '/client'));

app.use(function (peticion, respuesta, siguiente) {
		console.log("recibida petición: " + peticion.url);
		if (peticion.body && Object.keys(peticion.body).length>0) {
			console.log("body: " + JSON.stringify(peticion.body));
		}
		siguiente();
	});

console.log('ready');


console.log('steady');
app.listen(3000);
console.log('go');