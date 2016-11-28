import request from 'request'
import cheerio from 'cheerio'

request({uri: 'http://www.eztv.ag'}, (error, response, body) => {
  if (error)console.error(error)
  const $ = cheerio.load(body)

  $('.magnet').each(function() {
    const link = $(this)
    const title = link.attr('title')
    // const magnet = link.attr('href')
    const quality = title.match(/720p/g) || 'HDTV'
    let size = title.match(/\(.*\)/g).toString()
    if (size) size = size.slice(1, size.length - 1)
    const episode = title.match(/S\d\dE\d\d/g) || title.match(/\d{4} \d{2} \d{2}/g)
    const data = {
      title,
      size,
      episode: episode ? episode.toString() : 'N/A',
      quality: quality.toString(),
      //magnet
    }
    console.log(data)
  })
})
