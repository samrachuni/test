const express = require('express');
const app = express();
const port = 8000;
var path = require('path');

app.get('/', (req, res) => {
	const ipAdress = req.ip;
	const language = req.headers['accept-language'];
	const software = req.headers['user-agent'];
	console.log(req.ip);

	res.json({ ipAddress: ipAdress, languages: language, softwares: software });
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${8000}`);
});
