import { getWxUserinfo } from '~/apollo/wxUser'
import { createOrder } from '~/apollo/order'

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
        const { wxUserinfo } = await getWxUserinfo(client, code)
        commit('userLogin', wxUserinfo)
      } catch (error) {
        if (error.statusCode === '401') {
          commit('userLogin', null)
        }
      }
    },
    async wxPayUnifiedorder({ commit, state }, orderInfo) {
      const client = this.app.apolloProvider.defaultClient
      const data = await createOrder(client, orderInfo)
      // commit('orderInfo', orderInfo)
    },
  },
  getters: {
    user: state => state.wxUserinfo,
    orderInfo: state => state.orderInfo
  }
}
