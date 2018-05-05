<template>
  <div class="container">
    <appHeader title="关于我们" />
    <img src="/images/about.jpg" />
    <group>
      <cell title="微信公众号" value="安徽和恒服务平台"></cell>
      <cell title="联系电话" value="0551-62887811"></cell>
      <cell title="电子邮箱" value="sys860710@163.com"></cell>
    </group>
    <div class="about-footer">安徽和恒数码科技有限公司</div>
  </div>
</template>

<script>
import appHeader from '~/components/appHeader'

export default {
  components: {
    appHeader,
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: .45rem;
  img {
    width: 100%;
    max-width: 100%;
  }
}
.about-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 0.12rem;
  color: #999999;
  width: 100%;
  height: 0.4rem;
  text-align: center;
}
</style>
