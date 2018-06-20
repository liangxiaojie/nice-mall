<template>
  <div class="container">
  </div>
</template>

<script>
export default {
  async mounted() {
    const { code, state } = this.$route.query
    await this.$store.dispatch('getWxUserinfo', code)
    this.$router.push(state)
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: .45rem;
}
</style>
