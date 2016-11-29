var express = require('express')
var app = express()
var router = express.Router()
// https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
// TODO: add api route to fetch all db data
// TODO: connect to mongoose localdb
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
  res.send('Get')
})
// Add new show
.post(function(req, res, next) {
  console.log(req)
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

var server = app.listen(3000, function() {
  console.log('Express is listening to http://localhost:3000')
})
