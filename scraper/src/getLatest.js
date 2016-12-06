import request from 'request'
import cheerio from 'cheerio'
import Axios from 'axios'
import ezParse from './parse'
import pbParse from './pbParse'

export default function getLatest() {
  scrapePbay()
  scrapeEZTV()
}
function scrapePbay() {
  request({uri: 'https://pirateproxy.vip/tv/latest/'}, (error, response, body) => {
    if (error)console.error(error)
    const $ = cheerio.load(body)
    // console.log($('a[title="Download this torrent using magnet"]')[0].attribs.href)
    $('a[title="Download this torrent using magnet"]').each((a, item) => {
      // console.log(a, b)
      // const link = $(this)
      const magnet = item.attribs.href
      const text = $(item).parent().text()
      const output = pbParse(text)
      if (output) {
        // console.log(output)
        output.hash = magnet.match(/(?![magnet:?xt=urn:btih:])(.*)(?=&dn)/)[0]
        output.magnet = magnet

        Axios.post('/shows', output)
        .then(function (response) {
          console.log(response.data)
        })
        .catch(function (response) {
          console.log(response)
        })
      }
    })
  })
}
function scrapeEZTV() {
  request({uri: 'http://www.eztv.ag'}, (error, response, body) => {
    if (error)console.error(error)
    const $ = cheerio.load(body)

    $('.magnet').each((a, item) => {
      const name = item.attribs.title
      const magnet = item.attribs.href
      const output = ezParse(name)
      if (output) {
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
      }
    })
  })
}
