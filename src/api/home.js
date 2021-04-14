import {request} from 'util/request'

export function getTestData() {
  return request({
    url: "user/findAll",
    method: 'get'
  })
}

export function getBannerImages() {
  return request({
    url: "images/banner",
    method: 'get'
  })
}

export function getRecommendationImages() {
  return request({
    url: 'images/recommendation',
    method: 'get'
  })
}