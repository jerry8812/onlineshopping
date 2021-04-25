const getters = {
  imgUrl: state => imageId => state.imgBaseUrl + imageId,
  email: state => state.user.email,
  password: state => state.user.password
}

export default getters