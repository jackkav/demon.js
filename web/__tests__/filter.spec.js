import filter from '../src/lib/filter'

// given 2 of the same episodes with varying quality when selected quality is hdtv should hide 720p when both are available
const sevenTwentyEpisode = {'episode': 'S02E09', 'quality': '720p', 'size': '723.49 MB', 'title': 'Impastor', 'name': 'Impastor S02E09 720p HDTV x264-FLEET [eztv] '}
const tenEightyEpisode = {'episode': 'S02E09', 'quality': '1080p', 'size': '723.49 MB', 'title': 'Impastor', 'name': 'Impastor S02E09 1080p HDTV x264-FLEET [eztv] '}
const hdtvEpisode = {'episode': 'S02E09', 'quality': 'HDTV', 'size': '123.49 MB', 'title': 'Impastor', 'name': 'Impastor S02E09 HDTV x264-FLEET [eztv] '}
const repackEpisode = {'episode': 'S02E09', 'quality': '720p', 'size': '123.59 MB', 'title': 'Impastor', 'name': 'Impastor S02E09 REPACK 720p HDTV x264-FLEET [eztv] '}
const listOfTwo = [sevenTwentyEpisode, hdtvEpisode]
test('should filter unneccessary episode by quality', () => {
  expect(filter(listOfTwo, 'HDTV').length).toBe(1)
  expect(filter(listOfTwo, 'HDTV')[0]).toBe(hdtvEpisode)
})
test('should filter unneccessary episode by quality', () => {
  expect(filter(listOfTwo, '720p').length).toBe(1)
  expect(filter(listOfTwo, '720p')[0]).toBe(sevenTwentyEpisode)
})
test('should hide original when REPACK exists', () => {
  expect(filter(listOfThree, 'HDTV').length).toBe(3)
})

// given 1 episode with mismatched quality when selected quality is hdtv should not hide 720p when both are available

const listOfOne = [sevenTwentyEpisode]
test('should filter unneccessary episode by quality', () => {
  expect(filter(listOfOne, '720p')[0]).toBe(sevenTwentyEpisode)
})
test('should not filter unneccessary episode by quality', () => {
  expect(filter(listOfOne, 'HDTV')[0]).toBe(sevenTwentyEpisode)
})

// given 3 of the same episodes with the 720p quality when selected quality is hdtv
const listOfThree = [sevenTwentyEpisode, sevenTwentyEpisode, sevenTwentyEpisode]
test('should not hide 720p when only 720p is available', () => {
  expect(filter(listOfThree, 'HDTV').length).toBe(3)
})

// given 3 of of the same episodes with the same quality when one is a repack
const listOfThreeWithRepack = [repackEpisode, tenEightyEpisode, sevenTwentyEpisode]
test('should hide repacked episode', () => {
  expect(filter(listOfThreeWithRepack, '720p').length).toBe(2)
})
console.log(filter(listOfThreeWithRepack, '720p'))
// const {title, size} = {...hdtvEpisode}
//
// console.log(title)
// var names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl']
//
// const count = names =>
//   names.reduce((a, b) =>
//     Object.assign(a, {[b]: (a[b] || 0) + 1}), {})
//
// const duplicates = dict =>
//   Object.keys(dict).filter((a) => dict[a] > 1)
// console.log('count', count(names))
// console.log('count', duplicates(count(names)))
// console.log(listOfTwo.reduce((total, n) => total + n))
