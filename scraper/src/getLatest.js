import request from 'request'
import cheerio from 'cheerio'
import Axios from 'axios'
import parse from './parse'

export default function getLatest() {
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
}
