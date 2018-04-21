<template>
  <div class="container">
    <div class="title">热门租赁</div>
    <div class="lease-list">
      <div class="item" v-for="(item, key) in items" :key="key">
        <div class="lease-image">
          <img :src="item.imgSrc" />
        </div>
        <p class="lease-title">{{item.title}}</p>
        <p class="lease-discription">{{item.discription}}</p>
        <p class="price">
          ¥ {{item.price.toFixed(2)}} <span class="old">/{{item.priceUnit.displayName}}</span>
        </p>
        <div class="lease-marks">
          <el-rate
            v-model="item.mark"
            disabled
            show-score
            text-color="#ff9900"
            :score-template="`${item.mark.toFixed(1)}分`">
          </el-rate>
          <div class="sales">{{item.sales}}人已租</div>
        </div>
      </div>
    </div>
    <div class="more">更多租赁产品 ></div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'

export default {
  props: {
    items: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  font-size: .12rem;
}
.title {
  font-size: .16rem;
  padding: .1rem .2rem;
  color: rgba(0,0,0,.6);
  border-bottom: .01rem solid rgb(235, 235, 235);
}
.lease-list {
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
  color: rgba(0,0,0,.54);
}
.price {
  text-align: right;
  color: #ea625b;
  font-size: .18rem;
  .old {
    display: inline-block;
    margin: 0 .01rem;
    color: rgba(0,0,0,.54);
    font-size: .14rem;
  }
}
.lease-marks {
  display: flex;
  justify-content: space-between;
  /deep/ .el-rate__text {
    position: relative;
    top: .01rem;
  }
  .sales {
    color: rgba(0,0,0,.54);
    line-height: 1.8;
  }
}
.more {
  font-size: .14rem;
  padding: .1rem;
  border-top: .01rem solid rgb(235, 235, 235);
  text-align: center;
  color: rgba(0,0,0,.6);
}
</style>
