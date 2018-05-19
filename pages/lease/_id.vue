<template>
  <div class="container">
    <appHeader title="租赁详情" />
    <gallery :items="lease.images" />
    <div class="goods-info">
      <p class="goods-title">{{lease.name}}</p>
      <p class="discription">{{lease.discription}}</p>
      <div class="flex-row">
        <div class="mark">
          <rater :value="lease.mark" active-color="#ff9900" disabled></rater> {{lease.mark.toFixed(1)}}分
        </div>
        <div class="price">
          ¥{{lease.price.toFixed(2)}}
          <span class="unit">/{{lease.priceUnit.displayName}}</span>
          <s v-if="lease.priceOld" class="old">
            原价 ¥{{lease.priceOld}} /{{lease.priceUnit.displayName}}
          </s>
        </div>
      </div>
      <div class="flex-row">
        <span>快递：{{ (lease.expressFee || 0).toFixed(2) }}</span>
        <div class="sales">{{lease.sales}}人已购</div>
        <span>安徽合肥</span>
      </div>
      <p class="explain">
        说明：
          <span><img src="/images/icon-check.png"> 正品保证</span>
          <span><img src="/images/icon-flash.png"> 极速退款</span>
          <span><img src="/images/icon-seven.png"> 七天退换</span>
      </p>
      <div class="zhima-credit">
        芝麻信用：<a href="/deposit"><span style="color:#999">芝麻信用分750以上可免押金</span></a>
      </div>
    </div>
    <div class="divider_line"></div>
    <div class="title">用户评价</div>
    <div class="divider_line"></div>
    <div class="title">产品详情</div>
    <div class="details" v-html="lease.details"></div>
    <div class="lease-footer">
      <a class="footer-button" href="tel:0551-62887811">联系客服</a>
      <div class="footer-button invert">我要租用</div>
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
@import '~/assets/variables.scss';

.container {
  margin-top: .45rem;
  padding-bottom: .6rem;
}
.goods-info {
  padding: .1rem;
  background: #fff;
  font-size: .13rem;
}
.title {
  font-size: .16rem;
  padding: .1rem .2rem;
  color: $primary-color;
  border-bottom: .01rem solid rgb(235, 235, 235);
  background-color: #fff;
}
.goods-title {
  font-size: .18rem;
  color: rgba(0, 0, 0, .87);
}
.discription {
  padding: .05rem 0;
  font-size: .14rem;
  color: $primary-color;
}
.flex-row {
  padding: .05rem 0;
  display: flex;
  justify-content: space-between;
  color: #999;
}
.mark {
  font-size: .16rem;
  color: #ff9900;
  /deep/ .vux-rater-box {
    width: auto !important;
    height: auto !important;
  }
  /deep/ .vux-rater-inner {
    font-size: .15rem;
    top: -.01rem;
  }
}
.price {
  text-align: right;
  color: #ea625b;
  font-size: .18rem;
  .unit {
    display: inline-block;
    margin: 0 .01rem;
    color: rgba(0,0,0,.54);
    font-size: .14rem;
  }
  .old {
    color: #999;
    font-size: .13rem;
  }
}
.explain {
  padding: .05rem 0;
  span {
    display: inline-block;
    margin-right: .15rem;
    color: #999;
  }
  img {
    display: inline-block;
    position: relative;
    top: .02rem;
    width: .13rem;
  }
}
.zhima-credit {
  padding: .05rem 0;
  font-size: .14rem;
}
.details {
  max-width: 100%;
  /deep/ img {
    max-width: 100%;
  }
}

.lease-footer {
  position: fixed;
  bottom: 0;
  left: auto;
  right: auto;
  width: 3.75rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 .03rem #ddd;
}
.footer-button {
  width: 50%;
  text-align: center;
  padding: .12rem 0;
  background-color: #fff;
  color: $primary-color;
  font-size: .16rem;
  &.invert {
    background-color: $primary-color;
    color: #fff;
  }
}
</style>
