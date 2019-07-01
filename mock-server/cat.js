const faker = require('faker');
const express = require('express');

const catList = Array(100).fill({}).map(() => ({
  id: faker.random.uuid(), 
  name: faker.lorem.word(), 
  sex:'male', 
  birthday: (new Date()).getTime(), 
  description: faker.lorem.sentence(),
}));

const router = express.Router();

router.get('/', function(req, res) {
  res.json(catList);
});

router.get('/:id', function(req, res) {
  const catFound = catList.filter(cat => cat.id === req.params.id);
  res.json(catFound);
});

module.exports = router;