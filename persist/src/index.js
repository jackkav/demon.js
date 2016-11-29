import {app, router} from './init'
import Show from './model'

const port = process.env.PORT || 3000

// https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
// TODO: connect to mongolab

router.use(function(req, res, next) {
    // do logging
  console.log('Something is happening.', req.method, req.url)
  next() // make sure we go to the next routes and don't stop here
})

// REST API
router.route('/shows')
// Get all shows
.get(function(req, res, next) {
  Show.find()
  .select({_id: 0, __v: 0}) // ignore wierd mongoose auto added stuff
  .sort({ addedOn: -1 })
  .exec((err, shows) => {
    if (err) {
      res.send(err)
    }
    res.json(shows)
  })
})
// TODO: convert this to async await syntax to avoid callbacks?
// Add new show
.post(function(req, res, next) {
  // console.log(req.body)
  const input = req.body
  Show.find({hash: input.hash}, (err, existingShows) => {
    if (err) {
      res.send(err)
    }
    if (!existingShows.length) {
      input.addedOn = new Date()
      const oneShow = new Show(input)
      oneShow.save(function (err) {
        if (err) {
          console.log(err)
        } else {
          console.log('added: ' + req.body.title)
          res.send('added: ' + req.body.title)
        }
      })
    } else {
      // console.log('skipping: ' + req.body.title)
      // res.send('skipping: ' + req.body.title)
    }
  })
})

router.route('/shows/:id')
// Get one show
.get(function(req, res, next) {
  const query = {'hash': req.params.id}
  Show.find(query, function(err, shows) {
    if (err) {
      res.send(err)
    }
    res.json(shows)
  })
})
// Update one show
.put(function(req, res, next) {
  const query = {'hash': req.params.id}
  const input = req.body
  input.updatedOn = new Date()
  Show.findOneAndUpdate(query, input, {upsert: true}, (err, doc) => {
    if (err) {
      res.send(err)
    }
    res.send('Updated')
  })
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

app.listen(port, function() {
  console.log('Express is listening to http://localhost:3000')
})
