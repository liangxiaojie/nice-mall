import {
  getCartGoodses,
  createCartGoods,
} from '~/apollo/cartGoods'

export default {
  state() {
    return {
      cartGoodses: null,
    }
  },
  mutations: {
    setCartGoodses(state, cartGoodses) {
      state.cartGoodses = cartGoodses
    }
  },
  actions: {
    async GetCartGoodses({ commit, state }) {
      const client = this.app.apolloProvider.defaultClient
      try {
        const { cartGoodses } = await getCartGoodses(client)
        commit('setCartGoodses', cartGoodses)
      } catch (error) {
        if (error.statusCode === '401') {
          commit('setCartGoodses', null)
        }
      }
    },
    async AddCartGoods({ commit, state }, goods) {
      const client = this.app.apolloProvider.defaultClient
      const { cartGoods } = await createCartGoods(client, {
        goods_id: goods._id,
        number: 1,
      })
    },
  }
}
