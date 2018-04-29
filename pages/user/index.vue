<template>
  <div class="container">
    <div class="avatar-container">
      <div class="login">
        <img src="/images/login-weixin.png" />
      </div>
      <div class="avatar">
        <img src="/images/avatar.png" />
      </div>
    </div>
    <div class="divider_line"></div>
    <el-tabs class="order-tabs" v-model="activeName">
      <el-tab-pane label="租赁订单" name="lease">
        <div class="order-tab-content">
          <nuxt-link class="nav-item" to="/mall">
            <img src="/images/user/order-status-1.png" /> 待付款
          </nuxt-link>
          <nuxt-link class="nav-item" to="/mall">
            <img src="/images/user/order-status-2.png" /> 待发货
          </nuxt-link>
          <nuxt-link class="nav-item" to="/mall">
            <img src="/images/user/order-status-3.png" /> 待收货
          </nuxt-link>
          <nuxt-link class="nav-item" to="/mall">
            <img src="/images/user/order-status-4.png" /> 待归还
          </nuxt-link>
          <nuxt-link class="nav-item" to="/mall">
            <img src="/images/user/order-status-5.png" /> 待评价
          </nuxt-link>
        </div>
      </el-tab-pane>
      <el-tab-pane label="购物订单" name="mall">
        <nuxt-link class="nav-item" to="/mall">
          <img src="/images/user/order-status-1.png" /> 待付款
        </nuxt-link>
        <nuxt-link class="nav-item" to="/mall">
          <img src="/images/user/order-status-2.png" /> 待发货
        </nuxt-link>
        <nuxt-link class="nav-item" to="/mall">
          <img src="/images/user/order-status-3.png" /> 待收货
        </nuxt-link>
        <nuxt-link class="nav-item" to="/mall">
          <img src="/images/user/order-status-5.png" /> 待评价
        </nuxt-link>
      </el-tab-pane>
    </el-tabs>
    <div class="divider_line"></div>
    <ul>
      <li>
        <img src="/images/user/icon-coupon.png" /> 优惠券
      </li>
      <li>
        <img src="/images/user/icon-deposit.png" /> 我的押金
      </li>
      <li>
        <img src="/images/user/icon-address.png" /> 收货地址
      </li>
      <li>
        <img src="/images/user/icon-address.png" /> 收货地址
      </li>
    </ul>
    <div class="divider_line"></div>
    <ul>
      <li>
        <nuxt-link class="nav-item" to="/aboutUs">
          <img src="/images/user/icon-info.png" /> 关于我们
        </nuxt-link>
      </li>
    </ul>
    <div class="divider_line"></div>
    <app-footer />
  </div>
</template>

<script>
import appFooter from '~/components/appFooter'

export default {
  components: {
    appFooter
  },
  data: function() {
    return {
      activeName: 'lease'
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .3rem .2rem;
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
</style>
