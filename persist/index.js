import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import Show from './model'
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/test')
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
  console.log('Something is happening.')
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
  // mongoose save
  res.send('Post')
})

router.route('/shows/:id')
// Get one show
.get(function(req, res, next) {
  res.send('Get id: ' + req.params.id)
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
