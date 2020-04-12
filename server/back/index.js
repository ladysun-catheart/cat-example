const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const catController = require('./controller/CatController')

const PORT = 9001
const PATH_DB = 'mongodb://localhost:9010/neko'


const getDbConnection = async function () {
	const optsDb = {
		user: 'nekoUser',
		pass: 'nekoUser',
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
	const conn = mongoose.createConnection(PATH_DB, optsDb)
		.then(() => console.log('DBS conected'))
		.catch(() => console.log('DBS fail'))
	return conn
}

const init = function () {
	const app = express()
	app.use(express.json())
	app.use(morgan(':method :url :status - :response-time ms'))
	app.use('/cat', catController)
	getDbConnection()
	app.listen(PORT, () => {
		console.log(`Server listen in port ${PORT}`);
	})
}

init()