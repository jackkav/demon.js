import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost/test')
mongoose.Promise = global.Promise

const Show = mongoose.model('show', { name: String, episode: String, size: String, quality: String, })

const kitty = new Show({ name: 'Shameless US' })
kitty.save(function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('meow')
  }
})
