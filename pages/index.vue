<template>
  <section class="container">
    <home-header />
    <div class="home-body">
      <gallery :items="galleryItems" />
      <box-group />
    </div>
    <app-footer />
  </section>
</template>

<script>
import homeHeader from '~/components/homeHeader'
import gallery from '~/components/gallery'
import boxGroup from '~/components/boxGroup'
import appFooter from '~/components/appFooter'

export default {
  components: {
    homeHeader,
    gallery,
    boxGroup,
    appFooter
  },
  data() {
    return {
      galleryItems: [{
        imgSrc: '/images/gallery/1.jpg',
        linkUrl: ''
      }, {
        imgSrc: '/images/gallery/2.jpg',
        linkUrl: 'http://mp.weixin.qq.com/s/wa4rqqfJ-9YPCx-rq5wY3A'
      }, {
        imgSrc: '/images/gallery/3.jpg',
        linkUrl: ''
      }, {
        imgSrc: '/images/gallery/4.jpg',
        linkUrl: ''
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-body {
  position: absolute;
  top: .5rem;
  left: 0;
  right: 0;
}
</style>
