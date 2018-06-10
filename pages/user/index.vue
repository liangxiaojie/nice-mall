<template>
  <div class="container">
    <div class="avatar-container">
      <div class="login">
        <img src="/images/login-weixin.png" @click="userWxLogin" />
      </div>
      <div class="avatar">
        <img src="/images/avatar.png" />
      </div>
    </div>
    <div class="divider_line"></div>
    <tab :line-width=2 active-color='#33bfb5' v-model="activeIndex">
      <tab-item class="vux-center">租赁订单</tab-item>
      <tab-item class="vux-center">购物订单</tab-item>
    </tab>
    <swiper class="tab-content" v-model="activeIndex" :show-dots="false">
      <swiper-item>
        <flexbox>
          <flexbox-item>
            <nuxt-link class="nav-item" to="/mall">
              <img src="/images/user/order-status-1.png" /> 待付款
            </nuxt-link>
          </flexbox-item>
          <flexbox-item>
            <nuxt-link class="nav-item" to="/mall">
              <img src="/images/user/order-status-2.png" /> 待发货
            </nuxt-link>
          </flexbox-item>
          <flexbox-item>
            <nuxt-link class="nav-item" to="/mall">
              <img src="/images/user/order-status-3.png" /> 待收货
            </nuxt-link>
          </flexbox-item>
          <flexbox-item>
            <nuxt-link class="nav-item" to="/mall">
              <img src="/images/user/order-status-4.png" /> 待归还
            </nuxt-link>
          </flexbox-item>
          <flexbox-item>
            <nuxt-link class="nav-item" to="/mall">
              <img src="/images/user/order-status-5.png" /> 待评价
            </nuxt-link>
          </flexbox-item>
        </flexbox>
      </swiper-item>
      <swiper-item>
        <flexbox>
          <flexbox-item>
            <nuxt-link class="nav-item" to="/mall">
              <img src="/images/user/order-status-1.png" /> 待付款
            </nuxt-link>
          </flexbox-item>
          <flexbox-item>
            <nuxt-link class="nav-item" to="/mall">
              <img src="/images/user/order-status-2.png" /> 待发货
            </nuxt-link>
          </flexbox-item>
          <flexbox-item>
            <nuxt-link class="nav-item" to="/mall">
              <img src="/images/user/order-status-3.png" /> 待收货
            </nuxt-link>
          </flexbox-item>
          <flexbox-item>
            <nuxt-link class="nav-item" to="/mall">
              <img src="/images/user/order-status-5.png" /> 待评价
            </nuxt-link>
          </flexbox-item>
        </flexbox>
      </swiper-item>
    </swiper>
    <div class="divider_line"></div>
    <group class="cell-group">
      <cell title="优惠券" link="/coupon">
        <img slot="icon" class="cell-icon" src="/images/user/icon-coupon.png" />
      </cell>
      <cell title="我的押金" link="/deposit">
        <img slot="icon" class="cell-icon" src="/images/user/icon-deposit.png" />
      </cell>
      <cell title="收货地址" link="/address">
        <img slot="icon" class="cell-icon" src="/images/user/icon-address.png" />
      </cell>
      <cell title="关于我们" link="/aboutUs">
        <img slot="icon" class="cell-icon" src="/images/user/icon-info.png" />
      </cell>
    </group>
    <app-footer />
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem, Group, Cell, Flexbox, FlexboxItem } from 'vux'
import appFooter from '~/components/appFooter'

export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Group,
    Cell,
    Flexbox,
    FlexboxItem,
    appFooter
  },
  data: function() {
    return {
      activeIndex: 0
    }
  },
  methods: {
    async userWxLogin() {
      const successUrl = window.location.pathname
      const { success, data } = await this.$axios.$post('/api/auth/wxLogin', {successUrl});
      if (success) {
        window.location.href = data.url;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: .56rem;
  /deep/ .vux-swiper {
    height: .8rem !important;
  }
}
.avatar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .3rem .2rem;
  background-color: #fff;
}
.login {
  width: 1.8rem;
  img {
    width: 100%;
  }
}
.avatar {
  width: .7rem;
  height: .7rem;
  border-radius: 100%;
  overflow: hidden;
  img {
    width: 100%;
  }
}
.tab-content {
  background-color: #fff;
}
.nav-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: .2rem 0;
  color: #333;
  img {
    width: .25rem;
  }
}
.cell-group {
  /deep/ .weui-cells {
    margin-top: 0;
    &::before {
      border-top: none;
    }
    .weui-cell {
      padding: .15rem .2rem;
      &::before {
        left: 0;
      }
    }
  }
}
.cell-icon {
  display: block;
  width: .26rem;
  margin-right: .1rem;
}
</style>
