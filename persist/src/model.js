import mongoose from 'mongoose'
mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASE || 'mongodb://localhost/test')
const Show = mongoose.model('show', {
  name: String,
  title: String,
  episode: String,
  size: String,
  quality: String,
  magnet: String,
  hash: String,
  addedOn: Date,
  updatedOn: Date
})
export default Show
