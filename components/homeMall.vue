<template>
  <div class="container">
    <div class="title">热卖推荐</div>
    <div class="swiper-container" ref="homeMallGallery">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, key) in items" :key="key">
          <img :src="item.imgSrc" />
          <p class="good-title">{{item.title}}</p>
          <p class="price">
            ¥{{item.price}} <s class="old">¥{{item.priceOld}}</s>
          </p>
        </div>
      </div>
    </div>
    <div class="more">更多商城产品 ></div>
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
  mounted(){
    this.$nextTick(function(){
      var mySwiper = new Swiper(this.$refs.homeMallGallery, {
      preloadImages: false,
      lazy: {
        loadPrevNext: true,
      },
      slidesPerView: 2.7,
      spaceBetween: 20,
      freeMode: true,
    });
    })
  },
}
</script>

<style lang="scss" scoped>
.container {
  font-size: .12rem;
}
.swiper-container {
  padding: 0 .2rem;
  .swiper-slide {
    min-height: 2rem;
    img {
      width: 100%;
    }
  }
}
.title {
  font-size: .16rem;
  padding: .1rem .2rem;
  color: rgba(0,0,0,.6);
  border-bottom: .01rem solid rgb(235, 235, 235);
}
.good-title {
  min-height: .5rem;
}
.price {
  color: #ea625b;
  .old {
    display: inline-block;
    margin: 0 .01rem;
    color: rgba(0,0,0,.54);
    font-size: .1rem;
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
