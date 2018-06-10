<template>
  <div class="container">
  </div>
</template>

<script>
export default {
  async mounted() {
    const { code, state } = this.$route.query
    const { userinfo } = await this.$axios.$post('/api/auth/wxUserinfo', {code});
    this.$store.commit('userLogin', userinfo)
    this.$router.push(state)
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: .45rem;
}
</style>
