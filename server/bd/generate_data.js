const minimist = require('minimist')
const faker = require('faker')
const fs = require('fs')

const getArgs = function() {
	return minimist(process.argv.slice(2), {
		string: [ 'num' ],
		alias: {n: 'num'}
	})
}

const createCatList = function(count) {
	return (new Array(count))
		.fill({})
		.map((ele, index) => ({
		  id: index + 1,
		  name: faker.lorem.word(),
		  sex: 'male',
		  birthday: (new Date()).getTime(),
		  description: faker.lorem.sentence(),
		}))
}

const writeFile = function(content, outputDir) {
	fs.writeFileSync(outputDir, content)
}

const createCatListFile = function(count, outputDir) {
	const catList = createCatList(count)
	writeFile(JSON.stringify(catList), outputDir + 'cat_list.js')
}

const init = function() {
	const args = getArgs()
	createCatListFile(parseInt(args.num), args.output)
}

init()