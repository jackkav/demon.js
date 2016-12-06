import getLatest from './getLatest'
// import getSeries from './getSeries'
// import schedule from 'node-schedule'
import Axios from 'axios'
Axios.defaults.baseURL = process.env.API_LOCATION || 'http://120.131.8.223:49960/api/'
Axios.defaults.headers.common.Accept = 'application/json'
Axios.defaults.timeout = 20000

// TODO: refactor scraping regex

// schedule.scheduleJob('*/30 * * * *', function() {
getLatest()
// getSeries('https://eztv.ag/shows/481/game-of-thrones/')
// getSeries('https://eztv.ag/shows/257/south-park/')
// })
