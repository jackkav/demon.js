import parse from '../magnetParse'

// given 5 episodes with varying structures can pass data collection tests
// Westworld S01E09 720p HDTV x264-AVS [eztv] (1.07 GB) Magnet Link
// Shameless US S07E09 HDTV x264-LOL [eztv] (410.63 MB) Magnet Link
// Planet Earth II S01E04 HDTV x264-BEGUN [eztv] (508.98 MB) Magnet Link
// Stephen Colbert 2016 11 09 Miles Teller HDTV x264-UAV [eztv] (420.98 MB) Magnet Link
// NHK Great Nature 2014 The Enigmatic Island Tasmania 720p HDTV x264 AAC mkv [eztv] (1.32 GB) Magnet Link
test('should pull episode from title', () => {
  const input = 'Westworld S01E09 720p HDTV x264-AVS [eztv] (1.07 GB) Magnet Link'
  expect(parse(input).episode).toBe('S01E09')
})
test('should pull different episode from title', () => {
  const input = 'Shameless US S07E09 HDTV x264-LOL [eztv] (410.63 MB) Magnet Link'
  expect(parse(input).episode).toBe('S07E09')
})
// when not found
test('should pull set episode to empty?', () => {
  const input = 'NHK Great Nature 2014 The Enigmatic Island Tasmania 720p HDTV x264 AAC mkv [eztv] (1.32 GB) Magnet Link'
  expect(parse(input).episode).toBe('')
})
