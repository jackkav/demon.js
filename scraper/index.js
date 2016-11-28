import request from 'request'
import cheerio from 'cheerio'
import parse from './magnetParse'

// TODO: write this data to db
// TODO: design a effective way to avoid duplicate and wasting db reads
// TODO: run in a timetrickle task once an hour?
request({uri: 'http://www.eztv.ag'}, (error, response, body) => {
  if (error)console.error(error)
  const $ = cheerio.load(body)

  $('.magnet').each(function() {
    const link = $(this)
    const title = link.attr('title')
    const magnet = link.attr('href')
    const output = {
      metadata: parse(title),
      magnet
    }
    console.log(output)
  })
})
