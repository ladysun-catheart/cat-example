const router = require('express').Router()

const catRouter = function (Cat) {
  router.get('/all/:page?/:rows?', function (req, res, next) {
    const { page, rows } = req.params
    const queryCount = () => Cat.count().then(count => Promise.resolve(count))
    const query = count => Cat.find().then(list => {
      Promise.resolve(res
        .status(200)
        .json({
          total: count,
          res: list,
          links: [{ rel: 'prev', href: '' }, { rel: 'next', href: '' }]
        }))
    })
    page && query.skip((parseInt(page) - 1) * parseInt(rows))
    rows && query.limit(parseInt(rows))
    queryCount()
      .then(query)
      .catch(err => {
        res
          .status(404)
          .json({
            err: { code: 'NOT_FOUND' },
            links: [{ rel: 'self', href: req.originalUrl }]
          })
      })
  })

  router.post('/filter', function (req, res, next) {
    const { str, page, rows } = req.body
    const queryCount = () => Cat.count({ name: { "$regex": str } }).then(count => Promise.resolve(count))
    const preQuery = Cat.find({ name: { "$regex": str } }).sort({"$natural": -1})
    page && preQuery.skip((parseInt(page) - 1) * parseInt(rows))
    rows && preQuery.limit(parseInt(rows))
    const query = count => preQuery.then((list, err) => 
      Promise.resolve(res
        .status(200)
        .json({
          total: count,
          res: list,
          links: [{ rel: 'prev', href: '' }, { rel: 'next', href: '' }]
        }))
    )
    queryCount()
      .then(query)
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
    const query = Cat.findOne({ _id: req.params.id })
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
    const jsonBody = { ...req.body }
    delete jsonBody._id
    const cat = new Cat(jsonBody)
    cat.save()
      .then(ele => {
        res
          .status(201)
          .json({
            res: cat,
            links: [{ rel: 'self', href: `/cat/${cat._id}` }, { rel: 'cat list', href: '/cat/all' }]
          })
      })
      .catch(err => {
        res
          .status(400)
          .json({
            err: { code: 'BAD_REQUEST' },
            links: [{ rel: 'cat list', href: '/cat' }]
          })
      })

  })

  router.put('/', function (req, res, next) {
    const jsonBody = { ...req.body }
    const validation = ['_id', 'name', 'sex', 'birthday', 'description'].every(key => Object.keys(jsonBody).indexOf(key) !== -1)
    if (!validation) {
      res
        .status(400)
        .json({
          err: { code: 'BAD_REQUEST' },
          links: [{ rel: 'cat list', href: '/cat/all' }]
        })
    } else {
      const id = jsonBody._id
      delete jsonBody._id
      const query = Cat.findByIdAndUpdate(id, jsonBody, { new: true })
      query.then(ele => {
        res
          .status(200)
          .json({
            res: ele,
            links: [{ rel: 'self', href: `/cat/${id}` }, { rel: 'cat list', href: '/cat/all' }]
          })
      })
        .catch(err => {
          res
            .status(400)
            .json({
              err: { code: 'BAD_REQUEST' },
              links: [{ rel: 'self', href: `/cat/${id}` }, { rel: 'cat list', href: '/cat/all' }]
            })
        })
    }
  })

  router.patch('/', function (req, res, next) {
    const jsonBody = { ...req.body }
    const validation = Object.keys(jsonBody).every(key => ['_id', 'name', 'sex', 'birthday', 'description'].indexOf(key) !== -1)
    if (!validation) {
      res
        .status(400)
        .json({
          err: { code: 'BAD_REQUEST' },
          links: [{ rel: 'cat list', href: '/cat/all' }]
        })
    } else {
      const id = jsonBody._id
      delete jsonBody._id
      const query = Cat.findByIdAndUpdate(id, jsonBody, { new: true })
      query.then(ele => {
        res
          .status(200)
          .json({
            res: ele,
            links: [{ rel: 'self', href: `/cat/${id}` }, { rel: 'cat list', href: '/cat/all' }]
          })
      })
        .catch(err => {
          res
            .status(400)
            .json({
              err: { code: 'BAD_REQUEST' },
              links: [{ rel: 'self', href: `/cat/${id}` }, { rel: 'cat list', href: '/cat/all' }]
            })
        })
    }
  })

  router.delete('/:id', function (req, res, next) {
    const id = req.params.id
    Cat.findById(id).then(ele => {
      ele ? Cat.findById(id).remove()
        .then(ele => {
          res
            .status(200)
            .json({
              links: [{ rel: 'cat list', href: '/cat/all' }]
            })
        })
        .catch(err => {
          res
            .status(400)
            .json({
              links: [{ rel: 'cat list', href: '/cat/all' }]
            })
        }) :
        res
          .status(404)
          .json({
            links: [{ rel: 'cat list', href: '/cat/all' }]
          })
    })
  })

  return router
}

module.exports = catRouter 