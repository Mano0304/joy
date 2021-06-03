const axios = require('axios')
const configUrl = 'https://run.mocky.io/v3/'
let config = {}
let header = { accept: 'application/json' }
let content = {}

class HttpRequest {
  async mapBoxAPI (url) {
    const config = {
      method: 'get',
      url: `https://api.mapbox.com${url}?access_token=pk.eyJ1IjoiY2hhd2FraXQiLCJhIjoiYXl1R291TSJ9.tg0JmgHRqaxPkof1wPj43g`,
      headers: {}
    }
    let data
    await axios(config)
      .then(function (response) {
        data = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
    return data
  }

  async joyAPI (url, data) {
    header = {
      ...header,
      ...data.headers
    }
    content = {
      ...data.content
    }
    config = {
      method: 'post',
      url: configUrl.concat(url),
      headers: header,
      data: content
    }
    await axios(config)
      .then(function (response) {
        data = response.data
      })
      .catch(function (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      })
    return data
  }

  async joyGetAPI (url) {
    config = {
      method: 'get',
      url: configUrl.concat(url)
    }
    let data
    await axios(config)
      .then(function (response) {
        data = response.data
      })
      .catch(function (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      })
    return data
  }
}

export default HttpRequest
