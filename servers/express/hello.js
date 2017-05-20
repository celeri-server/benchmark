
const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
	res.status(200);
	res.send({
		message: 'Hello! :3'
	});
});

app.listen(9876, '0.0.0.0', () => {
	console.log('Express server running on port 9876');
});
