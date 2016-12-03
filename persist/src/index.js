import {app, router} from './bootstrap'
import Show from './model'

const port = process.env.PORT || 3000

router.use(function(req, res, next) {
  console.log('Request: ', req.method, req.url)
  next() // make sure we go to the next routes and don't stop here
})

router.route('/shows')
.get(function(req, res, next) {
  Show.find()
  .select({_id: 0, __v: 0}) // ignore wierd mongoose auto added stuff
  .sort({ addedOn: -1 })
  .limit(100) // limit data to post?
  .exec((err, shows) => {
    if (err) {
      res.send(err)
    }
    res.json(shows)
  })
})
// Add new show
.post(function(req, res, next) {
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
      console.log('skipping: ' + req.body.title)
      res.send('skipping: ' + req.body.title)
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
  const query = {'hash': req.params.id}
  Show.remove(query, (err) => {
    if (err) {
      res.send(err)
    }
    res.send('Deleted')
  })
})
router.route('/showTitles')
.get(function(req, res, next) {
  Show.find()
  .distinct('title')
  .exec((err, shows) => {
    if (err) {
      res.send(err)
    }
    res.json(shows)
  })
})
router.route('/getShowsByTitles/:query')
.get(function(req, res, next) {
  const q = req.params.query.split(',')
  Show.find({title: {$in: q}})
  .select({_id: 0, __v: 0})
  .sort({ addedOn: -1 })
  .exec((err, shows) => {
    if (err) {
      res.send(err)
    }
    res.json(shows)
  })
})
router.route('/getMostClicked')
.get(function(req, res, next) {
  Show.find({clicks: { $gte: 1 }})
  // .select({_id: 0, __v: 0, magnet: 0})
  .select({title: 1, episode: 1, name: 1, clicks: 1})
  .sort({clicks: -1})
  .limit(10)
  .exec((err, shows) => {
    if (err) {
      res.send(err)
    }
    res.json(shows)
  })
})
app.use('/api', router)

// index
app.get('/', function(req, res) {
  res.send('Hello world')
})

app.listen(port, function() {
  console.log('Express is listening to http://localhost:3000')
})
