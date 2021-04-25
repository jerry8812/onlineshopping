export default {
  imgUrl(state) {
    return imageId => {
      return state.imgBaseUrl + imageId
    }
  }
}