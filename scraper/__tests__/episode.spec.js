import parse from '../src/parse'

// given 5 episodes with varying structures can pass data collection tests
// Westworld S01E09 720p HDTV x264-AVS [eztv] (1.07 GB) Magnet Link
// Shameless US S07E09 HDTV x264-LOL [eztv] (410.63 MB) Magnet Link
// Food Unwrapped Series 9 13of18 Pesto 720p HDTV x264 AAC mp4 [eztv] (410.63 MB) Magnet Link
// Stephen Colbert 2016 11 09 Miles Teller HDTV x264-UAV [eztv] (420.98 MB) Magnet Link
// NHK Great Nature 2014 The Enigmatic Island Tasmania 720p HDTV x264 AAC mkv [eztv] (1.32 GB) Magnet Link
test('should ignore crap', () => {
  const input = 'Judge Judy S01E09 720p HDTV x264-AVS [eztv] (1.07 GB) Magnet Link'
  expect(parse(input)).toBe(false)
})
test('should pull episode from title', () => {
  const input = 'Westworld S01E09 720p HDTV x264-AVS [eztv] (1.07 GB) Magnet Link'
  expect(parse(input).episode).toBe('S01E09')
})
test('should pull different episode from title', () => {
  const input = 'Food Unwrapped Series 9 13of18 Pesto 720p HDTV x264 AAC mp4 [eztv] (410.63 MB) Magnet Link'
  expect(parse(input).episode).toBe('Series 9 13of18')
})
test('should pull quality from title', () => {
  const input = 'Westworld S01E09 720p HDTV x264-AVS [eztv] (1.07 GB) Magnet Link'
  expect(parse(input).quality).toBe('720p')
})
test('should pull different quality from title', () => {
  const input = 'Shameless US S07E09 HDTV x264-LOL [eztv] (410.63 MB) Magnet Link'
  expect(parse(input).quality).toBe('HDTV')
})
test('should pull size from title', () => {
  const input = 'Westworld S01E09 720p HDTV x264-AVS [eztv] (1.07 GB) Magnet Link'
  expect(parse(input).size).toBe('1.07 GB')
})
test('should pull different size from title', () => {
  const input = 'Shameless US S07E09 HDTV x264-LOL [eztv] (410.63 MB) Magnet Link'
  expect(parse(input).size).toBe('410.63 MB')
})
test('should pull title from title', () => {
  const input = 'Shameless US S07E09 HDTV x264-LOL [eztv] (410.63 MB) Magnet Link'
  expect(parse(input).title).toBe('Shameless US')
})
test('should pull different title from title', () => {
  const input = 'Westworld S01E09 720p HDTV x264-AVS [eztv] (1.07 GB) Magnet Link'
  expect(parse(input).title).toBe('Westworld')
})

// when episode is date
test('should set episode to date', () => {
  const input = 'Stephen Colbert 2016 11 09 Miles Teller HDTV x264-UAV [eztv] (420.98 MB) Magnet Link'
  expect(parse(input).episode).toBe('2016 11 09')
})
test('should pull title from title', () => {
  const input = 'Stephen Colbert 2016 11 09 Miles Teller HDTV x264-UAV [eztv] (420.98 MB) Magnet Link'
  expect(parse(input).title).toBe('Stephen Colbert')
})

// when episode is missing
test('should set episode to empty?', () => {
  const input = 'NHK Great Nature 2014 The Enigmatic Island Tasmania 720p HDTV x264 AAC mkv [eztv] (1.32 GB) Magnet Link'
  expect(parse(input).episode).toBe('')
})
test('should pull title from title', () => {
  const input = 'NHK Great Nature 2014 The Enigmatic Island Tasmania 720p HDTV x264 AAC mkv [eztv] (1.32 GB) Magnet Link'
  expect(parse(input).title).toBe('NHK Great Nature 2014 The Enigmatic Island Tasmania')
})
