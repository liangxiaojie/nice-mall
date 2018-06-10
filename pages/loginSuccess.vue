<template>
  <div class="container">
  </div>
</template>

<script>
export default {
  async create() {
    const { code, state } = this.$route.params
    const { userinfo } = await this.$axios.$post('/api/auth/wxUserinfo', {code});
    this.$store.commit('userLogin', userinfo)
    this.$route.push(state)
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: .45rem;
}
</style>
