import axios from 'axios'
import router from '@/router'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASEURL,
  timeout: 15000
})

// http request 拦截器
service.interceptors.request.use(
  config => {
    if (sessionStorage.sid) {
      config.headers['sid'] = sessionStorage.sid
    } else {
      router.push('/login')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 拦截器
service.interceptors.response.use(
  response => {
    const code = response.data.code
    if (code === '500') {} else if (code === '401') {}
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 封装axios请求
 * @param options 请求参数
 * @return promise
 */
const request = options => {
  return new Promise((resolve, reject) => {
    service(options)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export default request
