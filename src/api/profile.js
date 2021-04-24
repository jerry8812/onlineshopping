import {request} from 'util/request'

export function getUserByEmail(email) {
  return request({
    url: "api/users/email/" + email,
    method: 'get'
  })
}

export function register(userForm) {
  return request({
    url: "api/users",
    method: 'post',
    data: userForm,
    headers: { 'content-type': 'application/json' }
  })
}

export function loginByEmail(user) {
  return request({
    url: "api/users/auth",
    method: 'post',
    data: user
    // headers: { 'content-type': 'application/json' }
  })
}