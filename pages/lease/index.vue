<template>
  <div class="container">
    <div class="lease-header">
      <img src="/images/lease-gallery.png" />
    </div>
    <lease-list :items="leases" />
    <div class="divider_line"></div>
    <app-footer />
  </div>
</template>

<script>
import leaseList from '~/components/leaseList'
import appFooter from '~/components/appFooter'

import { getLeases } from '~/apollo/goods'

export default {
  components: {
    leaseList,
    appFooter
  },
  async asyncData (context) {
    let client = context.app.apolloProvider.defaultClient
    const { leases } = await getLeases(client)

    return {
      leases,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: .56rem;
}
.lease-header {
  img {
    width: 100%;
  }
}
</style>
