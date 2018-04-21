<template>
  <footer class="app-footer">
    <div class="footer-container">
      <nuxt-link class="nav-item" to="/" exact>
        <fa-icon class="footer-icon" icon="home" /> 首页
      </nuxt-link>
      <a class="nav-item">
        <fa-icon class="footer-icon" icon="shopping-bag" />
        <span>商城</span>
      </a>
      <nuxt-link class="nav-item" to="/lease">
        <fa-icon class="footer-icon" icon="sync" /> 租赁
      </nuxt-link>
      <a class="nav-item">
        <fa-icon class="footer-icon" icon="shopping-cart" />
        <span>购物车</span>
      </a>
      <a class="nav-item">
        <fa-icon class="footer-icon" icon="user" />
        <span>我的</span>
      </a>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>
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
  box-shadow: 0 .03rem .14rem .02rem rgba(0,0,0,.12);
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
        color: #ff6700;
      }
      .footer-icon {
        display: block;
        margin: .02rem auto .02rem;
        font-size: .18rem;
      }
    }
  }
}
</style>
