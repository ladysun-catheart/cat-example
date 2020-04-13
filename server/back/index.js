const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const catSchema = require('./schema/catSchema')
const catController = require('./controller/catController')

const PORT = 9001
const PATH_DB = 'mongodb://localhost:9010/neko'

const dbConnection = function () {
	return new Promise((res, rej) => {
		const optsDb = {
			user: 'nekoUser',
			pass: 'nekoUser',
			useNewUrlParser: true,
			useUnifiedTopology: true
		}
		const db = mongoose.createConnection(PATH_DB, optsDb)
		console.log('DBS conected')
		res(db)
	})
}

const initModels = function (db) {
	return new Promise(res => {
		const models = {}
		models.cat = db.model('cat', catSchema, 'cat')
		res(models)
	})
}

const initApi = function (models) {
	return new Promise((res, rej) => {
		const app = express()
		app.use(express.json())
		app.use(morgan(':method :url :status - :response-time ms'))
		app.use('/cat', catController(models.cat))
		app.listen(PORT, () => {
			console.log(`Api listen in port ${PORT}`);
			res()
		})
	})
}

const initServer = function () {
	console.log('Initialize environment...')
	dbConnection()
		.then(initModels)
		.then(initApi)
		.then(() => console.log('Server was initialized successfully!'))
		.catch(err => console.log(err))
}

initServer()