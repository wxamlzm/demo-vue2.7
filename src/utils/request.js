import axios from 'axios'
import config from './request.config.js'

const server = axios.create(config)

const publicUrl = process.env.VUE_APP_ENV_PUBLIC_API

export default {
  post (url, data) {
    url = publicUrl + url
    return server({ method: 'post', url, data })
  },
  get (url, params) {
    url = publicUrl + url
    return server({ method: 'get', url, params })
  }
}
