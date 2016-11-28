export default (input) => {
  const e = input.match(/S\d\dE\d\d/g)
  const q = input.match(/720p/g)
  return {
    episode: e ? e.toString() : '',
    quality: q ? q.toString() : 'HDTV'
  }
}
