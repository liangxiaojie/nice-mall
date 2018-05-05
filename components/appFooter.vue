<template>
  <footer class="app-footer">
    <div class="footer-container">
      <nuxt-link class="nav-item" to="/" exact>
        <fa-icon class="footer-icon" icon="home" /> 首页
      </nuxt-link>
      <nuxt-link class="nav-item" to="/lease" exact>
        <fa-icon class="footer-icon" icon="sync" /> 租赁
      </nuxt-link>
      <nuxt-link class="nav-item" to="/mall" exact>
        <fa-icon class="footer-icon" icon="shopping-bag" /> 商城
      </nuxt-link>
      <nuxt-link class="nav-item" to="/cart" exact>
        <fa-icon class="footer-icon" icon="shopping-cart" /> 购物车
      </nuxt-link>
      <nuxt-link class="nav-item" to="/user" exact>
        <fa-icon class="footer-icon" icon="user" /> 我的
      </nuxt-link>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>
@import '~/assets/variables.scss';

.app-footer {
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: auto;
  right: auto;
  width: 3.75rem;
  height: .56rem;
  font-size: .12rem;
  color: #999;
  background-color: #fff;
  box-sizing: border-box;
  border-top: .01rem solid #eee;
  .footer-container {
    display: flex;
    height: 100%;
    align-items: center;
    .nav-item {
      display: block;
      flex: 1 1 auto;
      text-align: center;
      color: #999;
      text-decoration: none;
      &.nuxt-link-active {
        color: $primary-color;
      }
      .footer-icon {
        display: block;
        margin: .02rem auto .02rem;
        font-size: .2rem;
      }
    }
  }
}
</style>
