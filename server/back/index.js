const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const catController = require('./controller/CatController')

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
		const conn = mongoose.createConnection(PATH_DB, optsDb)
			.then(() => {
				console.log('DBS conected')
				res(conn)
			})
			.catch(() => rej('DBS fail connection'))
	})
}

const initApi = function (conn) {
	return new Promise((res, rej) => {
		const app = express()
		app.use(express.json())
		app.use(morgan(':method :url :status - :response-time ms'))
		app.use('/cat', catController)
		app.listen(PORT, () => {
			console.log(`Api listen in port ${PORT}`);
			res()
		})
	})
}

const initServer = function () {
	console.log('Initialize environment...')
	dbConnection()
		.then(initApi)
		.then(() => console.log('Server was initialized successfully!'))
		.catch(err => console.log(err))
}

initServer()