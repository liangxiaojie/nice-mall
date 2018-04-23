import allCarsGql from '~/apollo/queries/allCars'

export default {
  state() {
    return {
      hello: null
    }
  },
  mutations: {
    setHello(state, hello) {
      state.hello = hello
    }
  },
  actions: {
    async foo (store, payload) {
      let client = this.app.apolloProvider.defaultClient
      try {
        const {data} = await client.query({
          query: allCarsGql
        })
        store.commit('setHello', data.hello)
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
