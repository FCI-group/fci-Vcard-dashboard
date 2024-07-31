/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
import axios from 'axios'

export default {
  namespaced: true,
  state: {
    countries: [],
    states: [],
    governments: [],
    areas: [],
  },
  getters: {
  },
  mutations: {
    SET_COUNTRIES(state, countries) {
      state.countries = countries
    },
    SET_STATES(state, states) {
      state.states = states
    },
    SET_CITIES(state, governments) {
      state.governments = governments
    },
    SET_AREAS(state, areas) {
      state.areas = areas
    },
  },
  actions: {
    getCountries({ commit }) {
      axios.get('get-countries').then(res => {
        if (res.status === 200) {
          commit('SET_COUNTRIES', res.data?.data)
        }
      })
    },
    getStates({ commit }) {
      axios.get('get-states').then(res => {
        if (res.status === 200) {
          commit('SET_STATES', res.data?.data)
        }
      })
    },
    getCities({ commit }) {
      axios.get('get-governments').then(res => {
        if (res.status === 200) {
          commit('SET_CITIES', res.data?.data)
        }
      })
    },
    getAreas({ commit }) {
      axios.get('get-areas').then(res => {
        if (res.status === 200) {
          commit('SET_AREAS', res.data?.data)
        }
      })
    },
  },
}
