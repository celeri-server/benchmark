
const { createServer } = require('http');

const server = createServer((req, res) => {
	if (req.url === '/hello') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({
			message: 'Hello! :3'
		}));
	}

	else {
		res.statusCode = 404;
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({
			error: 'Not Found'
		}));
	}
});

server.listen(9876, '0.0.0.0', () => {
	console.log('Baseline node.js http server running on port 9876');
});
