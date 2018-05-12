<template>
  <div class="container">
    <appHeader title="商品详情" />
    <gallery :items="goods.images" />
    <div class="goods-info">
      <p class="title">{{goods.title}}</p>
      <p class="discription">{{goods.discription}}</p>
      <div class="flex-row">
        <div class="price">
          ¥{{goods.price.toFixed(2)}} <s class="old">原价 ¥{{goods.priceOld.toFixed(2)}}</s>
        </div>
        <div class="sales">{{goods.sales}}人已购</div>
        <rater v-model="goods.mark" active-color="#ff9900" disabled></rater> {{goods.mark && goods.mark.toFixed(1)}}分
        <span>快递费：{{goods.expressFee && goods.expressFee.toFixed(2)}}</span>
        <p>
          说明：
            <span><img src="/images/icon-check.png">正品保证</span>
            <span><img src="/images/icon-flash.png">极速退款</span>
            <span><img src="/images/icon-seven.png">七天退换</span>
        </p>
        <div>领取产品专用券</div>
        <div>选择颜色 分类</div>
        <div>用户评价</div>
        <div>产品详情</div>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from '~/components/appHeader'
import gallery from '~/components/gallery'
import { Rater } from 'vux'

import { getGoodsById } from '~/apollo/goods'

export default {
  components: {
    appHeader,
    gallery,
    Rater
  },
  async asyncData ({ app, params }) {
    let client = app.apolloProvider.defaultClient
    let { goods } = await getGoodsById(client, params.id)
    return { goods }
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: .45rem;
}
</style>
