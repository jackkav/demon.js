import request from 'request'
import cheerio from 'cheerio'
import parse from './parse'

import axios from 'axios'

var instance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

instance.get('/shows')
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (response) {
    console.log(response)
  })

// import Show from './model'
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
    const output = parse(title)
    output.hash = magnet.match(/(?![magnet:?xt=urn:btih:])(.*)(?=&dn)/)[0]
    output.magnet = magnet

    // check if hash exists if not then save

    // const oneShow = new Show(output)
    // oneShow.save(function (err) {
    //   if (err) {
    //     console.log(err)
    //   } else {
    //     console.log('added: ' + output.metadata.title)
    //   }
    // })
    // axios.post()
    // console.log(output)
  })
})
