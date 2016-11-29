import mongoose from 'mongoose'
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/test')
const Show = mongoose.model('show', {
  metadata: {
    title: String,
    episode: String,
    size: String,
    quality: String,
  },
  magnet: String,
  hash: String,
  addedOn: Date
})
export default Show
