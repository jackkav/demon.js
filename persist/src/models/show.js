import mongoose from 'mongoose'
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

export default Show
