const router = require('express').Router()

const catRouter = function (cat) {
  router.get('/all/:limit?/:skip?', function (req, res, next) {
    const { limit, skip } = req.params
    const query = cat.find()
    skip && query.limit(parseInt(skip))
    limit && query.limit(parseInt(limit))
    query
      .then(list => {
        res
          .status(200)
          .json({
            res: list,
            links: [{ rel: 'prev', href: '' }, { rel: 'next', href: '' }]
          })
      })
      .catch(err => {
        res
          .status(404)
          .json({
            err: { code: 'NOT_FOUND' },
            links: [{ rel: 'self', href: req.originalUrl }]
          })
      })
  })

  router.get('/:id', function (req, res, next) {
    const query = cat.findOne({ _id: req.params.id })
    query
      .then(ele => {
        res
          .status(200)
          .json({
            res: ele,
            links: [{ rel: 'self', href: req.originalUrl }, { rel: 'cat list', href: '/cat/all' }]
          })
      })
      .catch(err => {
        res
          .status(404)
          .json({
            err: { code: 'NOT_FOUND' },
            links: [{ rel: 'self', href: req.originalUrl }, { rel: 'cat list', href: '/cat/all' }]
          })
      })
  })

  router.post('/', function (req, res, next) {
    res
      .status(201)
      .json({
        res: { name: 'cat' },
        links: [{ rel: 'self', href: req.path }, { rel: 'cat list', href: '/cat' }]
      })
  })

  router.put('/', function (req, res, next) {
    res
      .status(200)
      .json({
        res: { name: 'cat' },
        links: [{ rel: 'self', href: req.path }, { rel: 'cat list', href: '/cat' }]
      })
  })

  router.patch('/', function (req, res, next) {
    res
      .status(200)
      .json({
        res: { name: 'cat' },
        links: [{ rel: 'self', href: req.path }, { rel: 'cat list', href: '/cat' }]
      })
  })

  router.delete('/:id', function (req, res, next) {
    res
      .status(200)
      .json({ links: [{ rel: 'cat list', href: '/cat' }] })
  })

  return router
}

module.exports = catRouter 