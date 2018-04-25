<template>
  <div class="good-list">
    <div class="item" v-for="(item, key) in items" :key="key">
      <div class="good-image">
        <img :src="item.imgSrc" />
      </div>
      <div class="good-info">
        <p class="good-title">{{item.title}}</p>
        <p class="good-discription">{{item.discription}}</p>
        <div class="flex-row">
          <div class="price">
            ¥{{item.price.toFixed(2)}} <s class="old">¥{{item.priceOld.toFixed(2)}}</s>
          </div>
          <div class="sales">{{item.sales}}人已购</div>
        </div>
      </div>
    </div>
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
.good-list {
  .item {
    display: flex;
    align-items: center;
    border-bottom: .01rem solid rgb(235, 235, 235);
    &:last-child {
      border-bottom: none;
    }
    p {
      margin-bottom: .04rem;
    }
  }
}
.good-image {
  display: flex;
  width: 1.25rem;
  height: 1.25rem;
  align-items: center;
  justify-content: center;
  img {
    display: block;
    width: 100%;
  }
}
.good-info {
  width: 2.5rem;
  box-sizing: border-box;
  padding-right: .12rem;
}
.good-title {
  font-size: .14rem;
  color: rgba(0,0,0,.87);
}
.good-discription {
  color: rgba(0,0,0,.54);
}
.flex-row {
  display: flex;
  justify-content: space-between;
}
.price {
  display: flex;
  align-items: center;
  color: #ea625b;
  font-size: .16rem;
  .old {
    position: relative;
    top: .01rem;
    left: .01rem;
    display: block;
    margin: 0 .01rem;
    color: rgba(0,0,0,.54);
    font-size: .12rem;
  }
}
.sales {
  color: rgba(0,0,0,.54);
  line-height: 1.8;
  align-self: flex-end;
}
</style>
