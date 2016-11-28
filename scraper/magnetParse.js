export default (input) => {
  const e = input.match(/S\d\dE\d\d/g) || input.match(/\d{4} \d{2} \d{2}/g)
  const episode = e ? e.toString() : ''

  const q = input.match(/720p/g)
  const quality = q ? q.toString() : 'HDTV'

  let size = input.match(/\(.*\)/g).toString()
  if (size) size = size.slice(1, size.length - 1)

  const episodeIndex = input.indexOf(episode)
  const qualityIndex = input.indexOf(quality)
  const endOfTitleIndex = episodeIndex || qualityIndex
  const title = input.slice(0, endOfTitleIndex - 1)

  return {
    episode,
    quality,
    size,
    title
  }
}
