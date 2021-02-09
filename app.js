const express = require('express');
const app = express();
const port = 3000;
var path = require('path');
var bodyParser = require('body-parser');

var serveStatic = require('serve-static');
const { dirname } = require('path');

app.use((req, res, next) => {
	console.log(req.method + ' ' + req.path + '-' + req.ip);
	next();
});
app.get('/html', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});
app.get('/name', (req, res) => {
	var { first: firstName, last: lastName } = req.query;

	res.json({ name: `${firstName} ${lastName}` });
});
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/name', function (req, res) {
	// Handle the data in the request
	var string = req.body.first + ' ' + req.body.last;
	res.json({ name: string });
});

app.get('/:word/echo', (req, res) => {
	const { word } = req.params;

	res.json({ echo: word });
});

app.get(
	'/now',
	(req, res, next) => {
		req.time = new Date().toString();
		next();
	},
	(req, res) => {
		res.json({ time: req.time });
	}
);
app.get('/', (req, res) => {
	res.send('Hello World!');
});
app.post('/', (req, res) => {
	res.send('Got a POST request');
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
