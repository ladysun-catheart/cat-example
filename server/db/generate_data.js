const minimist = require('minimist')
const faker = require('faker')
const fs = require('fs')

const getArgs = function() {
	return minimist(process.argv.slice(2), {
		string: [ 'num', 'nameFile', 'outputDir', 'type' ],
		alias: {n: 'num'}
	})
}

const createCatList = function(count) {
	return (new Array(count))
		.fill({})
		.map(() => ({
		  name: faker.lorem.word(),
		  sex: 'male',
		  birthday: (new Date()).getTime(),
		  description: faker.lorem.sentence(),
		}))
}

const createContactList = function(count) {
	return (new Array(count))
	.fill({})
	.map((ele, index) => ({
		user: faker.name.firstName(),
		mail: faker.internet.email(),
		content: faker.lorem.sentence(),		
	}))
}

const writeFile = function(content, outputDir, nameFile) {
	fs.writeFileSync(`${outputDir}/${nameFile}`, content)
}

const init = function() {
	const args = getArgs()
	let list
	switch(args.type){
		case 'cat':
			list = createCatList(parseInt(args.num))
			break;
		case 'contact':
			list = createContactList(parseInt(args.num))
			break;
	}
	writeFile(JSON.stringify(list), args.outputDir, args.nameFile)
}

init()