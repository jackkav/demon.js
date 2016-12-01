export default(list, quality) => {
  if (!quality)quality = 'HDTV'
  let filteredList = []
  // if (input.length === 1) return [input[0]]
  for (let show of list) {
    // how many versions of the episode?
    const matchingShows = list.filter(n => n.episode === show.episode && n.title === show.title)
    // how many quality versions?
    const hasMoreThanOneQuality = matchingShows.filter(n => n.quality === 'HDTV').length && matchingShows.filter(n => n.quality === '720p').length
    // has repack of the same quality?
    const hasRepackOfSameQuality = matchingShows.filter(n => n.name.includes('REPACK') && n.quality === show.quality).length
    // is this show the version which got repacked
    if (hasRepackOfSameQuality && !show.name.includes('REPACK')) continue

    if (!hasMoreThanOneQuality) {
      filteredList.push(show)
    }

    if (hasMoreThanOneQuality && show.quality === quality) {
      filteredList.push(show)
    }
  }
  return filteredList
}
