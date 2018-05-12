<template>
  <div class="lease-list">
    <div class="item" v-for="(item, key) in items" :key="key">
      <nuxt-link :to="`/lease/${item._id}`">
        <div class="lease-image">
          <img :src="item.imgSrc" />
        </div>
        <p class="lease-title">{{item.name}}</p>
        <p class="lease-discription">{{item.discription}}</p>
        <div class="price">
          ¥ {{item.price.toFixed(2)}} <span class="unit">/{{item.priceUnit.displayName}}</span>
        </div>
        <div class="lease-marks">
          <div class="mark">
            <rater :value="item.mark" active-color="#ff9900" disabled></rater> {{item.mark.toFixed(1)}}分
          </div>
          <div class="sales">{{item.sales}}人已租</div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
import { Rater } from 'vux'

export default {
  props: {
    items: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  components: {
    Rater
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/variables.scss';

.lease-list {
  background-color: #fff;
  .item {
    padding: .1rem;
    border-bottom: .01rem solid rgb(235, 235, 235);
    &:last-child {
      border-bottom: none;
    }
    p {
      margin-bottom: .04rem;
    }
  }
}
.lease-image {
  width: 2.5rem;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
.lease-title {
  font-size: .14rem;
  color: rgba(0,0,0,.87);
}
.lease-discription {
  color: $primary-color;
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
}
.lease-marks {
  display: flex;
  justify-content: space-between;
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
  .sales {
    color: rgba(0,0,0,.54);
    line-height: .25rem;
  }
}
</style>
