import axios from 'axios'

export function request(config) {
  const request = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 5000
  })
  return request(config)
}