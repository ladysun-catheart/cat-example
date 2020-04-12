const express = require('express')
const morgan = require('morgan')
const catController = require('./controller/CatController')

const PORT = 9001

const init = function () {
	const app = express()
	app.use(express.json())
	app.use(morgan(':method :url :status - :response-time ms'))
	app.use('/cat', catController)
	app.listen(PORT, () => {
		process.stdout.write(`Server listen in port ${PORT} \n`);
	})
}

init()