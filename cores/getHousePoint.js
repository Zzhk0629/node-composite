const http = require('../plugins/http')

const getHousePoint = async (ids) => {
  try {
    const res = await http.get(
      `/landz-cloud-dict/house/getHousePoint?houseIds=${ids}&fillNull=true`
    )
    return res.data.result
  } catch (error) {
    console.log(error)
  }
}

module.exports = getHousePoint
