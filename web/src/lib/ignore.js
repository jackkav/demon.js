export default (episodeList, filterList) => {
  if (filterList.length === 0) return episodeList
  const stuffToFilter = filterList.map((x) => { return {title: x.split('|')[0], episode: x.split('|')[1]} })
  let result = []

  for (let item of episodeList) {
    const titlesMatch = stuffToFilter.filter(n => n.title === item.title).length
    const matchingShows = stuffToFilter.filter(n => n.title === item.title)
    const episodeIsWatchedOrBefore = matchingShows.filter(n => n.episode >= item.episode).length

    if (!titlesMatch || !episodeIsWatchedOrBefore) {
      result.push(item)
    }
  }
  return result
}
