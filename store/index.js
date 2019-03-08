export const state = () => ({
  message: '哇哈哈哈'
})

export const getters = {
  getMessage: state => state.message
}

export const mutations = {
  changeMessage(state) {
    state.message = '可乐'
    console.log(state.message)
  }
}
