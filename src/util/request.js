import axios from 'axios'

export function request(config) {
  const request = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 15000
  })

  request.interceptors.response.use(response => {
    const res = response.data
    if (res.code !== 200) {
      //
    } else {
      
    }
    return res
  })

  return request(config)
}