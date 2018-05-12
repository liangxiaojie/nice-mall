<template>
  <div class="swiper-container" ref="gallery">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in items" :key="index" @click="go(item.linkUrl)">
        <img class="swiper-lazy" :data-src="item.imgSrc || item" />
        <div class="swiper-lazy-preloader"></div>
      </div>
    </div>
    <div class="swiper-pagination" ref="galleryPagination"></div>
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
      var mySwiper = new Swiper(this.$refs.gallery, {
      pagination: {
        el: this.$refs.galleryPagination,
        clickable: true,
      },
      preloadImages: false,
      lazy: {
        loadPrevNext: true,
      },
      loop: true,
      observer:true,
      observeParents:true,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
    })
  },
  methods: {
    go(linkUrl) {
      if (linkUrl) window.location.href = linkUrl
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  background-color: #fff;
  .swiper-slide {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 2.25rem;
    img {
      width: 100%;
    }
  }
}
</style>

