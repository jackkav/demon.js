import {app, router} from './bootstrap'
require('./routes/shows')
require('./routes/visitors')

const port = process.env.PORT || 3000

app.use('/api', router)

// index
app.get('/', function(req, res) {
  res.send('Hello world')
})

app.listen(port, function() {
  console.log('Express is listening to http://localhost:3000')
})
