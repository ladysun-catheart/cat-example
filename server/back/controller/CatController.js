const router = require('express').Router()

const catRouter = function (cat) {
  router.get('/', function (req, res, next) {
    const query = cat.find()
    query
      .then(list => {
        console.log('ok')
        res
          .status(200)
          .json({
            res: list,
            links: [{ rel: 'prev', href: '' }, { rel: 'next', href: '' }]
          })
      })
      .catch(err => {
        console.log('ko')
        res
          .status(404)
          .json({
            err: { code: 'NOT_FOUND' },
            links: [{ rel: 'self', href: req.path }]
          })
      })
  })

  router.get('/:id', function (req, res, next) {
    res
      .status(200)
      .json({
        res: { name: 'cat' },
        links: [{ rel: 'self', href: req.path }, { rel: 'cat list', href: '/cat' }]
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