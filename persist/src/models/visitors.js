import mongoose from 'mongoose'
const Visitors = mongoose.model('vistors', {
  fingerprint: String,
  ip: String,
  country_name: String,
  region_name: String,
  city: String,
  userAgent: String,
  language: String,
  views: Number,
})
export default Visitors
