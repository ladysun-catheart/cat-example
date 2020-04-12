const catRouter = require('express').Router()

catRouter.get('/', function (req, res, next) {
  res
    .status(200)
    .json({
      res: [],
      links: [{ rel: 'prev', href: '' }, { rel: 'next', href: '' }]
    })
})

catRouter.get('/:id', function (req, res, next) {
  res
    .status(200)
    .json({
      res: { name: 'cat' },
      links: [{ rel: 'self', href: req.path }, { rel: 'cat list', href: '/cat' }]
    })
})

catRouter.post('/', function (req, res, next) {
  res
    .status(201)
    .json({
      res: { name: 'cat' },
      links: [{ rel: 'self', href: req.path }, { rel: 'cat list', href: '/cat' }]
    })
})

catRouter.put('/', function (req, res, next) {
  res
    .status(200)
    .json({
      res: { name: 'cat' },
      links: [{ rel: 'self', href: req.path }, { rel: 'cat list', href: '/cat' }]
    })
})

catRouter.patch('/', function (req, res, next) {
  res
    .status(200)
    .json({
      res: { name: 'cat' },
      links: [{ rel: 'self', href: req.path }, { rel: 'cat list', href: '/cat' }]
    })
})

catRouter.delete('/:id', function (req, res, next) {
  res
    .status(200)
    .json({ links: [{ rel: 'cat list', href: '/cat' }] })
})

module.exports = catRouter 