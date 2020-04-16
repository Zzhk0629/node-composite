const gm = require('gm').subClass({ imageMagick: true })
const getPosition = require('./getPosition')

class GmComposite {
  constructor(baseImg, changeImg, points) {
    this.baseImg = baseImg
    this.changeImg = changeImg
    this.points = points
    this.gmData = gm().in('-page', '+0+0').in(this.baseImg)

    return new Promise((resolve, reject) => {
      // 没有描点
      if (!this.points.length) {
        gm(baseImg).toBuffer((err, buffer) => {
          resolve(buffer)
        })
      }
      // 有描点
      gm(this.changeImg).size((err, size) => {
        this.points.forEach((item, idx) => {
          if (item && item.xrate && item.yrate) {
            const position = getPosition(item, size)
            if (this.changeImg.includes('houseMark')) {
              const changeImgIdx = this.changeImg.replace('1', idx + 1)
              console.log(changeImgIdx)
              this.gmData = this.gmData.in('-page', position).in(changeImgIdx)
            } else {
              this.gmData = this.gmData.in('-page', position).in(this.changeImg)
            }
          }
          if (idx === this.points.length - 1) {
            this.gmData.mosaic().toBuffer((err, buffer) => {
              resolve(buffer)
            })
          }
        })
      })
    }).catch((error) => {
      console.log(111, error)
    })
  }
}

module.exports = GmComposite
