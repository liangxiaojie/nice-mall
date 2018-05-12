<template>
  <div class="container">
    <appHeader title="租赁详情" />
    <gallery :items="lease.images" />
    <div class="goods-info">
      <p class="title">{{lease.name}}</p>
      <p class="discription">{{lease.discription}}</p>
      <div class="flex-row">
        <div>
          <rater :value="lease.mark" active-color="#ff9900" disabled></rater> {{lease.mark.toFixed(1)}}分
        </div>
        <div class="price">
          ¥{{lease.price.toFixed(2)}}
          <span class="unit">/{{lease.priceUnit.displayName}}</span>
          <s v-if="lease.priceOld" class="old">
            原价 ¥{{lease.priceOld}}
            <span class="unit">/{{lease.priceUnit.displayName}}</span>
          </s>
        </div>
      </div>
      <div class="flex-row">
        <span>快递费：{{ (lease.expressFee || 0).toFixed(2) }}</span>
        <div class="sales">{{lease.sales}}人已购</div>
        <span>安徽合肥</span>
      </div>
      <p>
        说明：
          <span><img src="/images/icon-check.png">正品保证</span>
          <span><img src="/images/icon-flash.png">极速退款</span>
          <span><img src="/images/icon-seven.png">七天退换</span>
      </p>
      <div class="zmxy">
        芝麻信用：<a href="/user/cashplege"><span style="color:#999">芝麻信用分750以上可免押金</span></a>
      </div>
      <div>用户评价</div>
      <div>产品详情</div>
    </div>
  </div>
</template>

<script>
import appHeader from '~/components/appHeader'
import gallery from '~/components/gallery'
import { Rater } from 'vux'

import { getLeaseById } from '~/apollo/goods'

export default {
  components: {
    appHeader,
    gallery,
    Rater
  },
  async asyncData ({ app, params }) {
    let client = app.apolloProvider.defaultClient
    let { lease } = await getLeaseById(client, params.id)
    return { lease }
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: .45rem;
}
.goods-info {
  padding: .1rem;
  background: #fff;
}
.title {
  font-size: .18rem;
  color: rgba(0, 0, 0, .87);
}
.discription {
  font-size: .14rem;
  color: #33bfb5;
}
.flex-row {
  display: flex;
  justify-content: space-between;
}
</style>
