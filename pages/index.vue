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
    <home-mall :items="hotGoodses" />
    <div class="more">
      <nuxt-link class="nav-item" to="/mall">
        更多商城产品 >
      </nuxt-link>
    </div>
    <div class="divider_line"></div>
    <div class="title">热门租赁</div>
    <lease-list :items="hotLeases" />
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
import { getHotGoodses, getHotLeases } from '~/apollo/goods'

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
    const { hotGoodses } = await getHotGoodses(client)
    const { hotLeases } = await getHotLeases(client)

    return {
      gallerys,
      hotGoodses,
      hotLeases
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
