<template>
<div class="container">
  <appHeader title="0元购" />
  <good-list :items="goodses" />
</div>
</template>

<script>
import appHeader from '~/components/appHeader'
import goodList from '~/components/goodList'
import { getGoodses } from '~/apollo/goods'

export default {
  components: {
    appHeader,
    goodList,
  },
  async asyncData (context) {
    let client = context.app.apolloProvider.defaultClient
    const { goodses } = await getGoodses(client, { type: 2 })

    return {
      goodses,
    }
  },
}
</script>

<style scoped>
.container {
  margin-top: .45rem;
}
</style>
