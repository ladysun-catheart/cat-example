const router = require('express').Router()

const contactRouter = function (Contact) {
  router.get('/all/:limit?/:skip?', function (req, res, next) {
    const { limit, skip } = req.params
    const query = Contact.find()
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
    const query = Contact.findOne({ _id: req.params.id })
    query
      .then(ele => {
        res
          .status(200)
          .json({
            res: ele,
            links: [{ rel: 'self', href: req.originalUrl }, { rel: 'contact list', href: '/contact/all' }]
          })
      })
      .catch(err => {
        res
          .status(404)
          .json({
            err: { code: 'NOT_FOUND' },
            links: [{ rel: 'self', href: req.originalUrl }, { rel: 'contact list', href: '/contact/all' }]
          })
      })
  })

  router.post('/', function (req, res, next) {
    const jsonBody = { ...req.body }
    delete jsonBody._id
    const contact = new Contact(jsonBody)
    contact.save()
      .then(ele => {
        res
          .status(201)
          .json({
            res: contact,
            links: [{ rel: 'self', href: `/contact/${contact._id}` }, { rel: 'contact list', href: '/contact/all' }]
          })
      })
      .catch(err => {
        res
          .status(400)
          .json({
            err: { code: 'BAD_REQUEST' },
            links: [{ rel: 'contact list', href: '/contact' }]
          })
      })

  })

  router.put('/', function (req, res, next) {
    const jsonBody = { ...req.body }
    const validation = ['_id', 'user', 'mail', 'content'].every(key => Object.keys(jsonBody).indexOf(key) !== -1)
    if (!validation) {
      res
        .status(400)
        .json({
          err: { code: 'BAD_REQUEST' },
          links: [{ rel: 'contact list', href: '/contact/all' }]
        })
    } else {
      const id = jsonBody._id
      delete jsonBody._id
      const query = Contact.findByIdAndUpdate(id, jsonBody, { new: true })
      query.then(ele => {
        res
          .status(200)
          .json({
            res: ele,
            links: [{ rel: 'self', href: `/contact/${id}` }, { rel: 'contact list', href: '/contact/all' }]
          })
      })
        .catch(err => {
          res
            .status(400)
            .json({
              err: { code: 'BAD_REQUEST' },
              links: [{ rel: 'self', href: `/contact/${id}` }, { rel: 'contact list', href: '/contact/all' }]
            })
        })
    }
  })

  router.patch('/', function (req, res, next) {
    const jsonBody = { ...req.body }
    const validation = Object.keys(jsonBody).every(key => ['_id', 'user', 'mail', 'content'].indexOf(key) !== -1)
    if (!validation) {
      res
        .status(400)
        .json({
          err: { code: 'BAD_REQUEST' },
          links: [{ rel: 'contact list', href: '/contact/all' }]
        })
    } else {
      const id = jsonBody._id
      delete jsonBody._id
      const query = Contact.findByIdAndUpdate(id, jsonBody, { new: true })
      query.then(ele => {
        res
          .status(200)
          .json({
            res: ele,
            links: [{ rel: 'self', href: `/contact/${id}` }, { rel: 'contact list', href: '/contact/all' }]
          })
      })
        .catch(err => {
          res
            .status(400)
            .json({
              err: { code: 'BAD_REQUEST' },
              links: [{ rel: 'self', href: `/contact/${id}` }, { rel: 'contact list', href: '/contact/all' }]
            })
        })
    }
  })

  router.delete('/:id', function (req, res, next) {
    const id = req.params.id
    Contact.findById(id).then(ele => {
      ele ? Contact.findById(id).remove()
        .then(ele => {
          res
            .status(200)
            .json({
              links: [{ rel: 'contact list', href: '/contact/all' }]
            })
        })
        .catch(err => {
          res
            .status(400)
            .json({
              links: [{ rel: 'contact list', href: '/contact/all' }]
            })
        }) :
        res
          .status(404)
          .json({
            links: [{ rel: 'contact list', href: '/contact/all' }]
          })
    })
  })

  return router
}

module.exports = contactRouter 