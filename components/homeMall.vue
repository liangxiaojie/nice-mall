<template>
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
        observer:true,
        observeParents:true
      });
    })
  },
}
</script>

<style lang="scss" scoped>
.swiper-container {
  padding: .2rem;
  .swiper-slide {
    img {
      width: 100%;
    }
  }
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
</style>
