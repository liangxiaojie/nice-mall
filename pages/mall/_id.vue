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
        <rater v-model="goods.mark" active-color="#ff9900" disabled></rater> {{goods.mark.toFixed(1)}}分
        <span>快递费：{{goods.expressFee.toFixed(2)}}</span>
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

export default {
  components: {
    appHeader,
    gallery,
    Rater
  },
  data() {
    return {
      goods: {
        images: [{
          imgSrc: 'http://hhfanyi.com/uploads/20180125/0d71d7fdbf7ca83c0781035275058674.jpg',
          linkUrl: ''
        }],
        title: 'Apple iMac 21.5英寸一体机',
        discription: '（2017新款双核Core i5 处理器/8GB内存/1TB存储）',
        price: 7999,
        priceOld: 8688,
        mark: 5,
        sales: 0,
        expressFee: 0,

      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: .45rem;
}
</style>
