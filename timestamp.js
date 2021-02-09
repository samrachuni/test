const express = require('express');
const app = express();
const port = 3000;
var path = require('path');

app.get('/api/timestamp/:date', (req, res) => {
	let date = req.params;
	let convertedDate = new Date(date.date).getTime();
	let convertedToUtc = new Date(parseInt(date.date)).toUTCString();
	console.log(!convertedToUtc);

	if (!isNaN(Number(date.date))) {
		let convertedToUtc = new Date(parseInt(date.date)).toUTCString();

		res.json({ unix: date.date, utc: convertedToUtc });
	} else if (!convertedDate || !convertedToUtc) {
		res.json({ error: 'Invalid date' });
	} else {
		console.log(date);
		console.log(new Date(date.date));
		let convertedToUtc = new Date(date.date).toUTCString();
		let convertedDate = new Date(date.date).getTime();
		res.json({ unix: convertedDate, utc: convertedToUtc });
	}
});
app.get('/api/timestamp', (req, res) => {
	res.json({ unix: new Date().getTime(), Utc: new Date().toUTCString() });
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
