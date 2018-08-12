export default function ({ store, req }) {
  if (!process.server && !store.getters.user) {
    store.dispatch('getWxUserinfo')
  }
}
