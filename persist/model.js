import mongoose from 'mongoose'
mongoose.Promise = global.Promise
const Show = mongoose.model('show', {
  metadata: {
    title: String,
    episode: String,
    size: String,
    quality: String,
  },
  magnet: String
})
export default Show
