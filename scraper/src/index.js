import request from 'request'
import cheerio from 'cheerio'
import parse from './parse'
import Show from './model'
// TODO: design a effective way to avoid duplicate and wasting db reads
// search for last added in list? would only work if always up
// could use data time sort
// TODO: run in a timetrickle task once an hour?
request({uri: 'http://www.eztv.ag'}, (error, response, body) => {
  if (error)console.error(error)
  const $ = cheerio.load(body)

  $('.magnet').each(function() {
    const link = $(this)
    const title = link.attr('title')
    const magnet = link.attr('href')
    const output = {
      hash: magnet.match(/(?![magnet:?xt=urn:btih:])(.*)(?=&dn)/)[0],
      metadata: parse(title),
      magnet,
    }

    // check if hash exists if not then save

    const oneShow = new Show(output)
    oneShow.save(function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log('added: ' + output.metadata.title)
      }
    })
    console.log(output)
  })
})
