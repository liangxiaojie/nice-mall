<template>
  <div class="goods-container">
    <gallery :items="data.images" />
    <div class="goods-info">
      <p class="goods-title">{{data.name}}</p>
      <p class="discription">{{data.discription}}</p>
      <div class="flex-row">
        <div class="mark">
          <rater :value="data.mark" active-color="#ff9900" disabled></rater> {{ (data.mark || 0).toFixed(1)}}分
        </div>
        <div v-if="type == 'lease'" class="price">
          ¥{{data.price.toFixed(2)}}
          <span class="unit">/{{data.priceUnit.displayName}}</span>
          <s v-if="data.priceOld" class="old">
            原价 ¥{{data.priceOld}} /{{data.priceUnit.displayName}}
          </s>
        </div>
        <div v-else class="price">
          <s class="old">¥{{data.priceOld.toFixed(2)}}</s> ¥{{data.price.toFixed(2)}}
        </div>
      </div>
      <div class="flex-row">
        <span>快递：{{ (data.expressFee || 0).toFixed(2) }}</span>
        <div class="sales">{{data.sales}}人已购</div>
        <span>安徽合肥</span>
      </div>
      <p class="explain">
        说明：
          <span><img src="/images/icon-check.png"> 正品保证</span>
          <span><img src="/images/icon-flash.png"> 极速退款</span>
          <span><img src="/images/icon-seven.png"> 七天退换</span>
      </p>
      <div v-if="type == 'lease'" class="zhima-credit">
        芝麻信用：<a href="/deposit"><span style="color:#999">芝麻信用分750以上可免押金</span></a>
      </div>
    </div>
    <slot></slot>
    <div class="divider_line"></div>
    <div class="title">用户评价</div>
    <div class="divider_line"></div>
    <div class="title">产品详情</div>
    <div class="details" v-html="data.details"></div>
  </div>
</template>

<script>
import { Rater, Group } from 'vux'
import gallery from '~/components/gallery'

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      default: 'goods'
    }
  },
  components: {
    gallery,
    Rater,
    Group
  }
}
</script>


<style lang="scss" scoped>
@import '~/assets/variables.scss';

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
</style>
