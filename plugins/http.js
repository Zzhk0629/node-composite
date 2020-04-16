const axios = require('axios')

process.env.NODE_ENV === 'production'
  ? (axios.defaults.baseURL = 'https://www.lizihang.com')
  : (axios.defaults.baseURL = 'https://twww.lizihang.com')

// 请求拦截器
axios.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.request.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

module.exports = axios
