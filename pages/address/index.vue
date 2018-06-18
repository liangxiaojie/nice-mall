<template>
  <div class="container">
    <appHeader title="收货地址管理" />
    <group>
{{deliveryAddresses}}
    </group>
    <div class="footer">
      <x-button type="primary" link="/address/edit">添加收货地址</x-button>
    </div>
  </div>
</template>

<script>
import appHeader from '~/components/appHeader'
import { getDeliveryAddresses } from '~/apollo/deliveryAddress'

export default {
  components: {
    appHeader,
  },
  data () {
    return {

    }
  },
  async asyncData (context) {
    let client = context.app.apolloProvider.defaultClient
    const { deliveryAddresses } = await getDeliveryAddresses(client, '5ae319d3bebda81d63b17de6')

    return {
      deliveryAddresses,
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: .45rem;
}
.footer {
  position: fixed;
  bottom: 0;
  left: auto;
  right: auto;
  width: 3.75rem;
  box-sizing: border-box;
  padding: .1rem;
  background-color: rgb(245, 245, 245);
}
</style>
