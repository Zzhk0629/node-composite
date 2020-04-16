const http = require('../plugins/http')

const getHouseTypePoint = async ({ resblockId, hasPW }) => {
  try {
    const res = await http.get(
      `/landz-cloud-dict/resblockStrategy/houseTypeInfo?resblockId=${resblockId}&hasPW=${hasPW}`
    )
    return res.data.result
  } catch (error) {
    console.log(error)
  }
}

module.exports = getHouseTypePoint