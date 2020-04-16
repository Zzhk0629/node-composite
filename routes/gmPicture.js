const express = require('express')
const router = express.Router()
const gmCores = require('../cores/gmCores')

router.get('/', async (req, res, next) => {
  const changeImg = 'public/images/point.png'
  const points = ['+100+200']
  const buf = await gmCores(changeImg, points)
  res.type('png')
  res.send(buf)
})

module.exports = router
