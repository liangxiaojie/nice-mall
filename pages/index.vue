<template>
  <div class="container">
    <gallery v-if="gallerys && gallerys.length > 0" :items="gallerys" />
    <Search
      auto-scroll-to-top
      @on-submit="onSubmit"
    />
    <box-group />
    <div class="divider_line"></div>
    <div class="title">热卖推荐</div>
    <home-mall :items="goodses" />
    <div class="more">
      <nuxt-link class="nav-item" to="/mall">
        更多商城产品 >
      </nuxt-link>
    </div>
    <div class="divider_line"></div>
    <div class="title">热门租赁</div>
    <lease-list :items="leases" />
    <div class="more">
      <nuxt-link class="nav-item" to="/lease">
        更多租赁产品 >
      </nuxt-link>
    </div>
    <div class="divider_line"></div>
    <app-footer />
  </div>
</template>

<script>
import { Search } from 'vux'
import homeHeader from '~/components/homeHeader'
import gallery from '~/components/gallery'
import boxGroup from '~/components/boxGroup'
import homeMall from '~/components/homeMall'
import leaseList from '~/components/leaseList'
import appFooter from '~/components/appFooter'

import { getGallerys } from '~/apollo/gallery'
import { getGoodses } from '~/apollo/goods'

export default {
  components: {
    Search,
    homeHeader,
    gallery,
    boxGroup,
    homeMall,
    leaseList,
    appFooter
  },
  async asyncData (context) {
    let client = context.app.apolloProvider.defaultClient
    const { gallerys } = await getGallerys(client)
    const { goodses } = await getGoodses(client)

    return {
      gallerys,
      goodses
    }
  },
  data() {
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
  },
  methods: {
    onSubmit () {

    },
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/variables.scss';

.container {
  padding-bottom: .56rem;
  background-color: #fff;
}
.title {
  font-size: .16rem;
  padding: .1rem .2rem;
  color: $primary-color;
  border-bottom: .01rem solid rgb(235, 235, 235);
}
.more {
  font-size: .14rem;
  padding: .1rem;
  border-top: .01rem solid rgb(235, 235, 235);
  text-align: center;
  a {
    color: rgba(0,0,0,.6);
    text-decoration: none;
  }
}
</style>
