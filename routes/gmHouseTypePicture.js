const express = require('express')
const router = express.Router()
const getHouseTypePoint = require('../cores/getHouseTypePoint')
const gmCores = require('../cores/gmCores')

router.get('/:resblockId/:hasPW', async (req, res, next) => {
  const { resblockId, hasPW } = req.params
  const getData = await getHouseTypePoint({ resblockId, hasPW })
  const type = req.query.type
  const baseImg = getData.fileUrl + '.1500x1000.wbp.jpg'
  const changeImg = 'public/images/circlePoint.png'
  let points = []
  if (getData.typeImgVoList && getData.typeImgVoList.length) {
    getData.typeImgVoList.forEach(item => {
      if (item.type === type) {
        points = item.pointList || []
      }
    })
  }
  const buf = await new gmCores(baseImg, changeImg, points)
  res.type('png')
  res.send(buf)
})

module.exports = router