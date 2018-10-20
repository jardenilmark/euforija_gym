import path from 'path'
import feathers from '@feathersjs/feathers'
import express from '@feathersjs/express'
import { MongoClient } from 'mongodb'
import feathersConfig from '@feathersjs/configuration'
import socketio from '@feathersjs/socketio'
import compression from 'compression'
import setupAllServices from './services/setupAllServices'

const app = express(feathers())

app
	.configure(feathersConfig(path.join(process.cwd())))
	.use(compression())
	.use(express.json())
	.use(express.urlencoded({ extended: true }))
	.use('/', express.static(path.join(process.cwd(), 'public')))
	.configure(express.rest())
	.configure(socketio())
	.use(express.errorHandler())

const createServer = async () => {
	const client = await MongoClient.connect(
		app.get('mongoURI'),
		{ useNewUrlParser: true }
	)
	const db = client.db('euforija-system')
	app.configure(setupAllServices(app, db))
	return app
}

export default createServer
