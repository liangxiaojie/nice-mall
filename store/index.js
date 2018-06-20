import { getWxUserinfo } from '~/apollo/wxUser'

export default {
  state() {
    return {
      wxUserinfo: null,
      orderInfo: null
    }
  },
  mutations: {
    userLogin(state, wxUserinfo) {
      state.wxUserinfo = wxUserinfo
    },
    confirmOrder(state, orderInfo) {
      state.orderInfo = orderInfo
    }
  },
  actions: {
    async getWxUserinfo({ commit, state }, code) {
      const client = this.app.apolloProvider.defaultClient
      try {
        const { userinfo } = await getWxUserinfo(client, code)
        commit('userLogin', userinfo)
      } catch (error) {
        if (error.statusCode === '401') {
          commit('userLogin', null)
        }
      }
    }
  },
  getters: {
    user: state => state.wxUserinfo,
    orderInfo: state => state.orderInfo
  }
}
