export function getImageUrl(imageId) {
  return "http://localhost:8080/image/" + imageId
}

export function debounce(func, delay) {
  let timer = null
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}