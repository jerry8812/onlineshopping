import {request} from 'util/request'

export function getUserByEmail(email) {
  return request({
    url: "/user/email/" + email,
    method: 'get'
  })
}