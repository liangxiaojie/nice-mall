<template>
  <div class="container">
    <tab :line-width=2 active-color='#33bfb5' v-model="activeIndex">
      <tab-item class="vux-center">产品</tab-item>
      <tab-item class="vux-center">服务</tab-item>
    </tab>
    <swiper v-model="activeIndex" :show-dots="false">
      <swiper-item>
        <div class="tab-swiper">
          <div class="gallery-header">
            <img src="/images/mall-gallery.png" />
          </div>
          <div class="content">
            <good-list :items="goods" />
            <div class="divider_line"></div>
          </div>
        </div>
      </swiper-item>
      <swiper-item>
        <div class="tab-swiper">
          <div class="gallery-header">
            <img src="/images/mall-service-gallery.png" />
          </div>
          <div class="content">

          </div>
        </div>
      </swiper-item>
    </swiper>
    <app-footer />
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
import goodList from '~/components/goodList'
import appFooter from '~/components/appFooter'

export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    goodList,
    appFooter
  },
  data: function() {
    return {
      activeIndex: 0,
      goods: [{
        _id: '1',
        imgSrc: 'http://hhfanyi.com/uploads/20180125/0d71d7fdbf7ca83c0781035275058674.jpg',
        title: 'Apple iMac 21.5英寸一体机',
        discription: '（2017新款双核Core i5 处理器/8GB内存/1TB存储）',
        price: 7999,
        priceOld: 8688,
        sales: 0
      }, {
        _id: '2',
        imgSrc: 'http://hhfanyi.com/uploads/20180125/c87cefc09781b873c3bd6d1a911eb7a8.jpg',
        title: 'Apple MacBook 12英寸笔记本电脑 玫瑰金色',
        discription: '（2017新款Core m3 处理器/8GB内存/256GB闪存 ）',
        price: 9688,
        priceOld: 10288,
        sales: 0
      }, {
        _id: '3',
        imgSrc: 'http://hhfanyi.com/uploads/20180125/303439caf29790691d1e1094aef96494.jpg',
        title: 'Apple MacBook Pro 15.4英寸笔记本电脑 银色',
        discription: '（2017新款Multi-Touch Bar/Core i7/16GB/256GB ）',
        price: 16999,
        priceOld: 18888,
        sales: 0
      }, {
        _id: '4',
        imgSrc: 'http://hhfanyi.com/uploads/20180125/8643901dd3c71fa0b99655a0e97bfb4e.jpg',
        title: 'Apple MacBook Pro 13.3英寸笔记本电脑 深空灰色',
        discription: '（2017新款Core i5处理器/8GB内存/128GB硬盘 ）',
        price: 9188,
        priceOld: 10288,
        sales: 0
      }, {
        _id: '5',
        imgSrc: 'http://hhfanyi.com/uploads/20180124/9248703183a8606e9ff7d9a9cb347489.jpg',
        title: 'vivo X20 黑色 4GB+64GB',
        discription: 'vivo X20 全面屏双摄拍照手机 4GB+64GB 移动联通电信全网通4G手机 双卡双待',
        price: 2599,
        priceOld: 3199,
        sales: 0
      }, {
        _id: '6',
        imgSrc: 'http://hhfanyi.com/uploads/20180125/f3d2516577b118ac1eabca37da468a41.jpg',
        title: 'Apple MacBook Air 13.3英寸笔记本电脑  银色',
        discription: '(2017新款Core i5 处理器/8GB内存/128GB闪存 ）',
        price: 5899,
        priceOld: 6499,
        sales: 0
      }, {
        _id: '7',
        imgSrc: 'http://hhfanyi.com/uploads/20180124/154878e4dceffa7c8282f2b9ebc4cc36.jpg',
        title: 'vivo X20 红色 4GB+64GB',
        discription: 'vivo X20 全面屏双摄拍照手机 4GB+64GB 移动联通电信全网通4G手机 双卡双待',
        price: 2788,
        priceOld: 3199,
        sales: 0
      }, {
        _id: '8',
        imgSrc: 'http://hhfanyi.com/uploads/20180124/789ac7696528ab1efe699d725d3ead62.jpg',
        title: 'OPPO R11s 黑色（4GB+64GB）',
        discription: 'OPPO R11s 全面屏双摄拍照手机 4GB+64GB 黑色 全网通 移动联通电信4G 双卡双待手',
        price: 2599,
        priceOld: 3199,
        sales: 0
      }, {
        _id: '9',
        imgSrc: 'http://hhfanyi.com/uploads/20180124/3778f9a1f1250b59bd899822ddc869fe.jpg',
        title: 'OPPO R11s （金色）4G+64G',
        discription: 'OPPO R11s 全面屏双摄拍照手机 4GB+64GB 金色 全网通 移动联通电信4G 双卡双待',
        price: 2599,
        priceOld: 3199,
        sales: 0
      }, {
        _id: '10',
        imgSrc: 'http://hhfanyi.com/uploads/20180124/b428d0570ddef5b74faaa28822ecd292.jpg',
        title: 'OPPO R11s （新年红）4G+64G',
        discription: '【新OPPO R11s 新年红  全面屏双摄拍照手机 全网通 4G+64G 双卡双待手机 新年红',
        price: 2799,
        priceOld: 3199,
        sales: 0
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: .56rem;
  /deep/ .vux-slider {
    overflow: initial;
  }
  /deep/ .vux-swiper {
    height: auto !important;
    overflow: initial;
    .vux-swiper-item {
      overflow: initial;
      height: auto;
      padding-bottom: .56rem;
    }
  }
}
.gallery-header {
  img {
    width: 100%;
  }
}
</style>
