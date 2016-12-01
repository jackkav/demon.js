import request from 'request'
import cheerio from 'cheerio'
import parse from './parse'
// import schedule from 'node-schedule'
import Axios from 'axios'
Axios.defaults.baseURL = process.env.API_LOCATION || 'http://120.131.8.223:49960/api/'
Axios.defaults.headers.common.Accept = 'application/json'
Axios.defaults.timeout = 20000

// runs every 30 minutes
// schedule.scheduleJob('*/30 * * * *', function() {
request({uri: 'http://www.eztv.ag'}, (error, response, body) => {
  if (error)console.error(error)
  const $ = cheerio.load(body)

  $('.magnet').each(function() {
    const link = $(this)
    const name = link.attr('title')
    const magnet = link.attr('href')
    const output = parse(name)
    output.hash = magnet.match(/(?![magnet:?xt=urn:btih:])(.*)(?=&dn)/)[0]
    output.magnet = magnet

    // Send this show to API
    Axios.post('/shows', output)
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (response) {
      console.log(response)
    })
  })
})
// })
