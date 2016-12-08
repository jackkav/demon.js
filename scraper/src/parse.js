export default (input) => {
  if (!input) return false
  if (!input.includes('[eztv]')) return false
  const e = input.match(/S\d\dE\d\d/) || input.match(/\d{4} \d{2} \d{2}/) || input.match(/Series \d \d{1,2}of\d{1,2}/)
  const episode = e ? e.toString() : ''

  const q = input.match(/720p/)
  const quality = q ? q.toString() : 'HDTV'

  let size = input.match(/\(.*\)/).toString()
  if (size) size = size.slice(1, size.length - 1)

  const episodeIndex = input.indexOf(episode)
  const qualityIndex = input.indexOf(quality)
  const endOfTitleIndex = episodeIndex || qualityIndex
  const title = input.slice(0, endOfTitleIndex - 1)
  const sizeIndex = input.indexOf(size)
  const name = input.slice(0, sizeIndex - 1)

  return {
    episode,
    quality,
    size,
    title,
    name,
    uploader: 'eztv'
  }
}
