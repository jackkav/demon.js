import {router} from '../bootstrap'
import Visitors from '../models/visitors'

router.route('/view')
.post((req, res, next) => {
  const visitor = req.body
  const query = {fingerprint: visitor.fingerprint}
  const instance = new Visitors(visitor)
  Visitors.find(query, (err, visitors) => {
    if (err) {
      res.send(err)
    }
    if (visitors.length) {
      Visitors.findOne(query, (err, doc) => {
        if (err) {
          res.send(err)
        }
        doc.views++
        doc.save()
      })
    } else {
      instance.views = 1
      instance.save()
    }
    res.send('success')
  })
})
