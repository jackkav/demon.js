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
  updatedOn: Date,
  clicks: Number
})
const Site = mongoose.model('site', {
  views: Number
})
export default {Show, Site}
