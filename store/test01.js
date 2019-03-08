// init state
export const state = () => ({
  list: [{ name: '1', done: true }, { name: '2', done: false }]
})

// init getter
export const getters = {
  doneList: state => state.list.filter(l => l.done)
}

export const mutations = {
  setList: (state, payload) => {
    state.list = payload.list
    console.log(payload, 'mutation')
  }
}

// actions
export const actions = {
  async getStateList({ commit }) {
    const { data } = await this.$axios.get('/tableData.json')
    commit('setList', { list: data.data })
  }
}
