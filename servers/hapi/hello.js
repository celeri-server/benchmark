
const { Server } = require('hapi');

const server = new Server();

server.connection({ port: 9876, address: '0.0.0.0' });

server.route({
	method: 'GET',
	path: '/hello',
	handler: (req, reply) => {
		reply({
			message: 'Hello! :3'
		});
	}
});

server.start((err) => {
	if (err) {
		throw err;
	}

	console.log('Hapi server running on port 9876');
});
