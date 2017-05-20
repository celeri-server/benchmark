
const { TrieRouter } = require('@celeri/router');
const { createServer } = require('@celeri/http-server');

const app = createServer({
	router: TrieRouter
});

for (let i = 0; i < 100; i++) {
	app.get(`/${i}`)
		.use(({ req, res }) => {
			res.statusCode = 400;
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify({
				message: 'You hit a dummy endpoint'
			}));
		});
}

app.get('/hello')
	.use(({ req, res }) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({
			message: 'Hello! :3'
		}));
	});

app.use(app.router({
	notFound: ({ req, res }) => {
		res.statusCode = 404;
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({
			error: 'Not Found'
		}));
	}
}));

app.server.listen(9876, '0.0.0.0', () => {
	console.log('Celeri server running on port 9876');
});
