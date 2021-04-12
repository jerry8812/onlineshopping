import {request} from 'util/request'

export function getTestData() {
  return request({
    url: "user/findAll",
    method: 'get'
  })
}

export function getBanner() {
  return request({
    url: "images/banner",
    method: 'get'
  })
}