const gm = require('gm').subClass({ imageMagick: true })

const gmComposite = (pointImg, points) => {
  return new Promise((resolve, reject) => {
    let gmClass = gm().in('-page', '+0+0').in('public/images/bg.jpg')
    points.forEach((point, idx) => {
      gmClass = gmClass.in('-page', point).in(pointImg)
      if (idx === points.length - 1) {
        gmClass.mosaic().toBuffer((err, buffer) => {
          resolve(buffer)
        })
      }
    })
  })
}

module.exports = gmComposite
