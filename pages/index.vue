<template>
  <section class="container">
    <home-header />
    <div class="home-body">
      <gallery :items="galleryItems" />
      <box-group />
      <div class="divider_line"></div>
      <home-mall :items="goods" />
      <div class="divider_line"></div>
    </div>
    <app-footer />
  </section>
</template>

<script>
import homeHeader from '~/components/homeHeader'
import gallery from '~/components/gallery'
import boxGroup from '~/components/boxGroup'
import homeMall from '~/components/homeMall'
import appFooter from '~/components/appFooter'

export default {
  components: {
    homeHeader,
    gallery,
    boxGroup,
    homeMall,
    appFooter
  },
  data() {
    return {
      galleryItems: [{
        imgSrc: '/images/gallery/1.jpg',
        linkUrl: ''
      }, {
        imgSrc: '/images/gallery/2.jpg',
        linkUrl: 'https://mp.weixin.qq.com/s/_jzqa-FFZpqwkL681QgbiQ'
      }, {
        imgSrc: '/images/gallery/3.jpg',
        linkUrl: 'http://mp.weixin.qq.com/s/wa4rqqfJ-9YPCx-rq5wY3A'
      }, {
        imgSrc: '/images/gallery/4.jpg',
        linkUrl: ''
      }, {
        imgSrc: '/images/gallery/5.jpg',
        linkUrl: ''
      }],
      goods: [{
        imgSrc: 'http://hhfanyi.com/uploads/20180125/4b3ac5f3522e44a577b6125d842ac6ad.png',
        title: 'Apple iMac 21.5英寸一体机',
        price: 7999,
        priceOld: 8688
      }, {
        imgSrc: 'http://hhfanyi.com/uploads/20180125/23d436b08b7d3e1768553c8d74902dd7.jpg',
        title: 'Apple MacBook 12英寸笔记本电脑 玫瑰金色',
        price: 9688,
        priceOld: 10288
      }, {
        imgSrc: 'http://hhfanyi.com/uploads/20180125/8ac562a13875710506262bf9c9ba5fb6.png',
        title: 'Apple MacBook Pro 15.4英寸笔记本电脑 银色',
        price: 16999,
        priceOld: 18888
      }, {
        imgSrc: 'http://hhfanyi.com/uploads/20180125/663731f7e1e4c56713175f2d7cf62ffc.jpg',
        title: 'Apple MacBook Pro 13.3英寸笔记本电脑 深空灰色',
        price: 9188,
        priceOld: 10288
      }, {
        imgSrc: 'http://hhfanyi.com/uploads/20180124/e3f12b7a28aa757e0d94ac16882bac7e.png',
        title: 'vivo X20 黑色 4GB+64GB',
        price: 2599,
        priceOld: 3199
      }, {
        imgSrc: 'http://hhfanyi.com/uploads/20180125/197a3d239819f89689ac03edfe836a82.png',
        title: 'Apple MacBook Air 13.3英寸笔记本电脑 银色',
        price: 5899,
        priceOld: 6499
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-body {
  position: absolute;
  top: .42rem;
  left: 0;
  right: 0;
  padding-bottom: .56rem;
}
.divider_line {
  height: .08rem;
  background-color: rgb(245, 245, 245);
}
</style>
