import gallerysGQL from '~/apollo/queries/gallerys.gql'
import goodsesGQL from '~/apollo/queries/goodses.gql'

export default {
  state() {
    return {
      gallerys: null,
      goodses: null
    }
  },
  getters: {
    gallerys: state => state.gallerys
  },
  mutations: {
    setGallerys(state, gallerys) {
      state.gallerys = gallerys
    },
    setGoodses(state, goodses) {
      state.goodses = goodses
    }
  },
  actions: {
    async getGallerys (store, payload) {
      let client = this.app.apolloProvider.defaultClient
      try {
        const {data} = await client.query({
          query: gallerysGQL
        })
        store.commit('setGallerys', data.gallerys)
      } catch (error) {
        console.log(error)
      }
    },
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
