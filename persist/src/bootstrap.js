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

export {app, router}
