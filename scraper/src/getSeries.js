import request from 'request'
import cheerio from 'cheerio'
// import Axios from 'axios'
// import parse from './parse'

export default function getSeries(url) {
  request({uri: url}, (error, response, body) => {
    if (error)console.error(error)
    const $ = cheerio.load(body)
    const rating = $('span[itemprop="ratingValue"]').text()
    console.log(rating)
    // $('.show_info_rating_score').each(function() {
    //   const link = $(this)
    //   console.log(link)
    // })
  })
}
