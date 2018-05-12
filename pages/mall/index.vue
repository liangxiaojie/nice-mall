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
            <good-list :items="goodses" />
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

import { getGoodses } from '~/apollo/goods'

export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    goodList,
    appFooter
  },
  async asyncData (context) {
    let client = context.app.apolloProvider.defaultClient
    const { goodses } = await getGoodses(client)

    return {
      goodses,
    }
  },
  data: function() {
    return {
      activeIndex: 0,
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
