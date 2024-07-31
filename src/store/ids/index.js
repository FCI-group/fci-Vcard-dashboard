export default {
  namespaced: true,
  state: {
    id: null,
  },
  getters: {
    getId: state => state.id,

  },
  mutations: {
    SET_ID(state, id) {
      state.id = id
    },
  },
  actions: {},
}
