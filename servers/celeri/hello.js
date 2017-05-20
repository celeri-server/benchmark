
const { createServer } = require('@celeri/http-server');

const app = createServer();

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
