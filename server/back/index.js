const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const catSchema = require('./schema/catSchema')
const contactSchema = require('./schema/contactSchema')
const catController = require('./controller/catController')
const contactController = require('./controller/contactController')

const PORT = 9001
const PATH_DB = 'mongodb://localhost:9010/neko'

const dbConnection = function () {
	return new Promise((res, rej) => {
		const optsDb = {
			user: 'nekoUser',
			pass: 'nekoUser',
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		}
		const db = mongoose.createConnection(PATH_DB, optsDb)
		console.log('DBS conected')
		res(db)
	})
}

const initModels = function (db) {
	return new Promise(res => {
		const models = {}
		models.Cat = db.model('Cat', catSchema, 'cat')
		models.Contact = db.model('Contact', contactSchema, 'contact')
		res(models)
	})
}

const initApi = function (models) {
	return new Promise((res, rej) => {
		const app = express()
		app.use(express.json())
		app.use(morgan(':method :url :status - :response-time ms'))
		app.use(cors())
		app.use('/cat', catController(models.Cat))
		app.use('/contact', contactController(models.Contact))
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