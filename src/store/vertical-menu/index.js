// import { $themeConfig } from '@themeConfig'

export default {
  namespaced: true,
  state: {
    isVerticalMenuCollapsed: false,
  },
  getters: {},
  mutations: {
    UPDATE_VERTICAL_MENU_COLLAPSED(state, val) {
      state.isVerticalMenuCollapsed = val
    },
  },
  actions: {},
}
