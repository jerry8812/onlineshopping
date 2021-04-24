import {request} from 'util/request'

export function getBannerImages() {
  return request({
    url: "/images/groupImages/banner",
    method: 'get'
  })
}

export function getRecommendationImages() {
  return request({
    url: '/image/groupImages/recommendation',
    method: 'get'
  })
}

export function getProductsData(productTag, pageNum) {
  return request({
    url: 'api/products/tag',
    method: 'get',
    params: {
      productTag,
      pageNum
    }
  })
}