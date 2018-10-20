import createServer from './createServer'

const startServer = async () => {
	const app = await createServer()
	app
		.listen(app.get('port'))
		.on('listening', () => console.log('Server listening on http://localhost:3000'))
}

startServer()
