import parse from '../src/pbParse'

const walkingDead = 'The.Walking.Dead.S07E07.720p.x265.2Ch.HAAC-RCCL-KITE-METeam Uploaded 49 mins ago, Size 271.2 MiB, ULed by rain0007'
test('should pull size from input', () => {
  expect(parse(walkingDead).size).toBe('271.2 MB')
})
test('should pull name from input', () => {
  expect(parse(walkingDead).name).toBe('The Walking Dead S07E07 720p x265 2Ch HAAC-RCCL-KITE-METeam')
})
test('should pull title from input', () => {
  expect(parse(walkingDead).title).toBe('The Walking Dead')
})
