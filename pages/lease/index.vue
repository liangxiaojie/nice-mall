<template>
  <div class="container">
    <div class="lease-header">
      <img src="/images/lease-gallery.png" />
    </div>
    <lease-list :items="leases" />
    <div class="divider_line"></div>
    <app-footer />
  </div>
</template>

<script>
import leaseList from '~/components/leaseList'
import appFooter from '~/components/appFooter'

export default {
  components: {
    leaseList,
    appFooter
  },
  data: function() {
    return {
      leases: [{
        imgSrc: 'http://hhfanyi.com/uploads/20171215/4e27558ef030409a07160fca2601712f.jpg',
        title: '科大讯飞翻译机晓译翻译器同声多国语言出国旅游智能翻译神器',
        discription: '【中英离线翻译】支持中英/中日/中韩/中法/中西即时语音互译，出国就要畅快聊！',
        price: 30,
        priceUnit: {
          type: 'day',
          displayName: '天'
        },
        mark: 5,
        sales: 5
      }, {
        imgSrc: 'http://hhfanyi.com/uploads/20180110/e75a7fd4e78b478f4e210e72199ba5e5.jpg',
        title: '百度翻译机',
        discription: '美国WiFi翻译一体机(中英翻译）',
        price: 0,
        priceUnit: {
          type: 'day',
          displayName: '天'
        },
        mark: 5,
        sales: 5
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: .56rem;
}
.lease-header {
  img {
    width: 100%;
  }
}
</style>
