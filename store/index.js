export default {
  state() {
    return {
      orderInfo: null
    }
  },
  mutations: {
    confirmOrder(state, orderInfo) {
      state.orderInfo = orderInfo
    }
  },
  actions: {

  },
  getters: {
    orderInfo: state => state.orderInfo
  }
}
