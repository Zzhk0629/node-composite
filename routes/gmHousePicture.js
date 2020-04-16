const express = require('express')
const router = express.Router()
const getHousePoint = require('../cores/getHousePoint')
const gmCores = require('../cores/gmCores')

router.get('/:houseId', async (req, res, next) => {
  const getData = await getHousePoint(req.params.houseId)
  const baseImg = getData.buildingImg + '.1500x1000.wbp.jpg'
  const changeImg = 'public/images/point.png'
  const points = getData.points.length ? getData.points : []
  const buf = await new gmCores(baseImg, changeImg, points)
  res.type('png')
  res.send(buf)
})

module.exports = router
