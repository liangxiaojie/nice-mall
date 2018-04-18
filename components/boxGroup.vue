<template>
  <div class="box-group">
    <a class="nav-item">
      <img class="nav-icon" src="/images/boxGroup/shopping@2x.png" />
      <span>0元购物</span>
    </a>
    <a class="nav-item">
      <img class="nav-icon" src="/images/boxGroup/grantAuth@2x.png" />
      <span>芝麻授权</span>
    </a>
    <a class="nav-item">
      <img class="nav-icon" src="/images/boxGroup/coupon@2x.png" />
      <span>优惠券</span>
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.box-group {
  display: flex;
  align-items: center;
  height: .8rem;
  font-size: .12rem;
  color: #999;
  .nav-item {
    display: block;
    flex: 1 1 auto;
    text-align: center;
    .nav-icon {
      display: block;
      width: .33rem;
      height: .33rem;
      margin: .02rem auto .02rem;
    }
  }
}
</style>
