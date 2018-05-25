import Vuex from 'vuex'
import getters from './getter'
import mutations from './mutation'
import actions from './actions'

export default () => {
  return new Vuex.Store({
    state: {
      token: '',
      userInfo: {}
    },
    getters,
    mutations,
    actions
  })
}
