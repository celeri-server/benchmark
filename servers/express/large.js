
const express = require('express');

const app = express();

for (let i = 0; i < 100; i++) {
	app.get(`/${i}`, (req, res) => {
		res.status(400);
		res.send({
			message: 'You hit a dummy endpoint'
		});
	});
}

app.get('/hello', (req, res) => {
	res.status(200);
	res.send({
		message: 'Hello! :3'
	});
});

app.listen(9876, '0.0.0.0', () => {
	console.log('Express server running on port 9876');
});
