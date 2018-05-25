import axios from 'axios'
export default {
  async nuxtServerInit({ dispatch, commit, getters }, { req, res }) {

  },
  async LOGIN({ commit, state, getters }, payload) {
    let resp = await axios.post(`${getters.routerBaseApi}/login`, payload)
    return resp
  },
  async REGISTER({ commit, state, getters }, payload) {
    let resp = await axios.post(`${getters.routerBaseApi}/register`, payload)
    return resp
  },
  async VALIDATETOKEN({ getters, state }) {
    let resp = await axios.post(`${getters.routerBaseApi}/validateToken`, state.token)
    return resp
  },
  async LOGOUT({ state, getters }) {
    let resp = await axios.post(`${getters.baseUrl}/logout`)
    return resp
  }
}
