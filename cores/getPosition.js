const getPosition = function (data = {}, size = {}) {
  let position = ''
  const { xrate, yrate } = data
  const { width, height } = size
  const xPos = (1500 * xrate) / 100 - width / 2 > 0 ? (1500 * xrate) / 100 - width / 2 : 0
  const yPos = (1000 * yrate) / 100 - height > 0 ? (1000 * yrate) / 100 - height : 0
  position = `+${xPos}+${yPos}`
  return position
}

module.exports = getPosition
