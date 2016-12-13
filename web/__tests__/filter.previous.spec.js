import filter from '../src/lib/ignore'

const episodeTen = {'episode': 'S02E10', 'title': 'Impastor'}
const episodeNine = {'episode': 'S02E09', 'title': 'Impastor'}
const episodeEleven = {'episode': 'S02E11', 'title': 'Lost'}
const episodeTwelve = {'episode': 'S02E12', 'title': 'Lost'}

const watchedNine = ['Impastor|S02E09']
const watchedTen = ['Impastor|S02E10']
const watchedEleven = ['Lost|S02E11']
const watchedTwelve = ['Lost|S02E12']
// given 2 of the same series with different episode when we hide episode ten we also want to hide episode nine
const listOfTwo = [episodeTen, episodeNine]
test('should filter nothing', () => {
  expect(filter(listOfTwo, []).length).toBe(2)
})

test('should filter one unneccessary episode', () => {
  expect(filter(listOfTwo, watchedNine).length).toBe(1)
  expect(filter(listOfTwo, watchedNine)[0]).toBe(episodeTen)
})

test('should filter all episodes', () => {
  expect(filter(listOfTwo, watchedTen).length).toBe(0)
})

test('should filter no episodes', () => {
  expect(filter(listOfTwo, watchedEleven).length).toBe(2)
})

const listOfFour = [episodeTen, episodeNine, episodeEleven, episodeTwelve]
test('should filter all episodes', () => {
  expect(filter(listOfFour, ['Impastor|S02E10', 'Lost|S02E12']).length).toBe(0)
})

test('should filter one show', () => {
  expect(filter(listOfFour, watchedTwelve).length).toBe(2)
})

test('should filter one show', () => {
  expect(filter(listOfFour, watchedTwelve).length).toBe(2)
})
test('should filter one episode of each show', () => {
  expect(filter(listOfFour, ['Impastor|S02E08', 'Lost|S02E10']).length).toBe(4)
})
test('should filter one episode of each show', () => {
  expect(filter(listOfFour, ['Impastor|S02E08', 'Lost|S02E12']).length).toBe(2)
})
test('should filter one episode of each show', () => {
  expect(filter(listOfFour, ['Impastor|S02E09', 'Lost|S02E12']).length).toBe(1)
  expect(filter(listOfTwo, ['Impastor|S02E09', 'Lost|S02E12'])[0]).toBe(episodeTen)
})

// given 2 of the same series with different episode when we hide episode nine we don't want to hide episode ten
// test('should filter only episode nine', () => {
//   expect(filter(listOfTwo, watchedNine).length).toBe(1)
//   expect(filter(listOfTwo, watchedNine)[0]).toBe(episodeTen)
// })
// test('should not filter any', () => {
//   expect(filter([episodeTen], watchedNine).length).toBe(1)
//   expect(filter([episodeTen], watchedNine)[0]).toBe(episodeTen)
// })

// // given 4 of the different series with different episode when we hide episode nine we only don't want to see episode nine
// const listOfFour = [episodeTen, episodeNine, episodeEleven, episodeTwelve]
// test('should filter only episode nine', () => {
//   expect(filter(listOfFour, watchedNine).length).toBe(3)
// })
//
// // given 4 of the different series with different episode when we hide episode twelve of lost we only want to see impastor
// test('should filter only one episode of lost', () => {
//   expect(filter(listOfFour, watchedEleven).length).toBe(3)
// })
//
// // given 4 of the different series with different episode when we hide episode twelve of lost we only want to see impastor
// test('should filter only lost', () => {
//   expect(filter(listOfFour, watchedTwelve).length).toBe(2)
// })

// const watchedAll = ['Lost|S02E12', 'Impastor|S02E10']
// // given 4 of the different series with different episode when we hide episode twelve of lost we only want to see impastor
// test('should filter all', () => {
//   expect(filter(listOfFour, watchedAll).length).toBe(0)
// })
//
// const watchedAllButOne = ['Lost|S02E12', 'Impastor|S02E09']
// // given 4 of the different series with different episode when we hide episode twelve of lost we only want to see impastor
// test('should filter all but one', () => {
//   expect(filter(listOfFour, watchedAllButOne).length).toBe(1)
// })
