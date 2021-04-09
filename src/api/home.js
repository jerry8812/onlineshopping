import {request} from 'util/request'

export function getTestData() {
  return request({
    url: "/findAll",
    method: 'get'
  })
}