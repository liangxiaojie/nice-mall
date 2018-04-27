import goodsesGQL from '~/apollo/queries/goodses.gql'

export default {
  state() {
    return {
      goodses: null
    }
  },
  mutations: {
    setGoodses(state, goodses) {
      state.goodses = goodses
    }
  },
  actions: {
    async getGoodses (store, payload) {
      let client = this.app.apolloProvider.defaultClient
      try {
        const {data} = await client.query({
          query: goodsesGQL
        })
        store.commit('setGoodses', data.goodses)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
