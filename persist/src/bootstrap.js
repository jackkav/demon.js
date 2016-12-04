import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

const router = express.Router()

router.use(function(req, res, next) {
  console.log('Request: ', req.method, req.url, req.body)
  next() // make sure we go to the next routes and don't stop here
})

export {app, router}

import mongoose from 'mongoose'
mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASE || 'mongodb://localhost/test')
