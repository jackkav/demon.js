var express = require('express')
var app = express()
var router = express.Router()

// TODO: add api route to fetch all db data
// TODO: connect to mongoose localdb
// TODO: connect to mongolab
// TODO: add write to db to method

// REST API
router.route('/items')
.get(function(req, res, next) {
  res.send('Get')
})
.post(function(req, res, next) {
  res.send('Post')
})

router.route('/items/:id')
.get(function(req, res, next) {
  res.send('Get id: ' + req.params.id)
})
.put(function(req, res, next) {
  res.send('Put id: ' + req.params.id)
})
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
