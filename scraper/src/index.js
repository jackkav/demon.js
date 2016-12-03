import getLatest from './getLatest'
// import schedule from 'node-schedule'
import Axios from 'axios'
Axios.defaults.baseURL = process.env.API_LOCATION || 'http://120.131.8.223:49960/api/'
Axios.defaults.headers.common.Accept = 'application/json'
Axios.defaults.timeout = 20000

// runs every 10 minutes
// schedule.scheduleJob('*/10 * * * *', function() {
getLatest()
// })
