import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost/test')
mongoose.Promise = global.Promise

const Show = mongoose.model('show', {
  metadata: {
    title: String,
    episode: String,
    size: String,
    quality: String,
  },
  magnet: String
})

const shameless = new Show(
  {
    metadata:
    { episode: 'S07E09',
      quality: 'HDTV',
      size: '410.63 MB',
      title: 'Shameless US'
    },
    magnet: 'magnet:?xt=urn:btih:50960de9bf954602fa0850d431bd9ca89e04a17a&dn=Shameless.US.S07E09.HDTV.x264-LOL%5Beztv%5D.mkv%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969'
  })
shameless.save(function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('meow')
  }
})
