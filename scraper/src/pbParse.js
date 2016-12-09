export default (input) => {
  if (!input) return false
  if (input.includes('Season') && input.includes('Complete')) return false
  if (!input.includes('[ettv]')) return false
  if (input.match(/(Home And Away)|(Judge Judy)|(Coronation Street)|(Emmerdale)/)) return false
  const e = input.match(/S\d\dE\d\d/) || input.match(/\d{4} \d{2} \d{2}/) || input.match(/Series \d \d{1,2}of\d{1,2}/)
  const episode = e ? e.toString() : ''
  const q = input.match(/1080p/) || input.match(/720p/)
  const size = input.match(/Size (.*?), ULed/)[1].replace('MiB', 'MB').replace('GiB', 'GB')
  const quality = q ? q.toString() : 'HDTV'
  const episodeIndex = input.indexOf(episode)
  const uploadedIndex = input.indexOf('Uploaded')
  const endOfTitleIndex = episodeIndex
  const title = input.slice(0, endOfTitleIndex - 1).replace(/\./g, ' ').replace(/\n/g, '').replace(/\t/g, '')
  const name = input.slice(0, uploadedIndex - 1).replace(/\./g, ' ').replace(/\n/g, '').replace(/\t/g, '')
  return {
    episode,
    quality,
    size,
    title,
    name,
    uploader: 'ettv'
  }
}
