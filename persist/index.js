import express from 'express'
import bodyParser from 'body-parser'
import Show from './model'
const app = express()

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 3000

const router = express.Router()
// https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
// TODO: connect to mongolab
// TODO: add write to db to method

router.use(function(req, res, next) {
    // do logging
  console.log('Something is happening.', req.method, req.url)
  next() // make sure we go to the next routes and don't stop here
})

// REST API
router.route('/shows')
// Get all shows
.get(function(req, res, next) {
  Show.find(function(err, shows) {
    if (err) {
      res.send(err)
    }
    res.json(shows)
  })
})
// Add new show
.post(function(req, res, next) {
  console.log(req.body)
  const input = req.body
  input.addedOn = new Date()
  const oneShow = new Show(input)
  oneShow.save(function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log('added: ' + req.body.title)
    }
  })
  res.send('Post')
})

router.route('/shows/:id')
// Get one show
.get(function(req, res, next) {
  const query = {'title': req.params.id}
  Show.find(query, function(err, shows) {
    if (err) {
      res.send(err)
    }
    res.json(shows)
  })
})
// Update one show
.put(function(req, res, next) {
  res.send('Put id: ' + req.params.id)
})
// Delete on show
.delete(function(req, res, next) {
  res.send('Delete id: ' + req.params.id)
})

app.use('/api', router)

// index
app.get('/', function(req, res) {
  res.send('Hello world')
})

var server = app.listen(port, function() {
  console.log('Express is listening to http://localhost:3000')
})
