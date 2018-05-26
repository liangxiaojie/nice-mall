<template>
  <div class="container">
    <appHeader title="商品详情" />
    <goods :data="goods">
      <group>
        <cell title="领取产品专用券" is-link></cell>
        <cell title="选择颜色 分类" is-link></cell>
      </group>
    </goods>
    <div class="app-footer-container">
      <a class="app-footer-button" href="tel:0551-62887811">联系客服</a>
      <div class="app-footer-button split" @click="handlePlaceOrder">加入购物车</div>
      <div class="app-footer-button invert" @click="handlePlaceOrder">立即下单</div>
    </div>
  </div>
</template>

<script>
import { Group, Cell, Toast } from 'vux'
import appHeader from '~/components/appHeader'
import goods from '~/components/goods'

import { getGoodsById } from '~/apollo/goods'

export default {
  components: {
    appHeader,
    goods,
    Group,
    Cell,
  },
  async asyncData ({ app, params }) {
    let client = app.apolloProvider.defaultClient
    let { goods } = await getGoodsById(client, params.id)
    return { goods }
  },
  methods: {
    handlePlaceOrder() {

    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: .45rem;
}
</style>
