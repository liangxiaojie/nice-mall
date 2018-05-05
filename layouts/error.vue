<template>
  <div class="container">
    <div class="box">
      <h1>{{ error.statusCode }}</h1>
      <h3 v-if="error.statusCode === 404">页面未找到</h3>
      <h4 v-if="error.statusCode === 404">抱歉，页面好像去火星了~</h4>
      <h3 v-else>应用发生错误异常</h3>
      <nuxt-link class="back" to="/">返回首页</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style lang="scss" scoped>
@import '~/assets/variables.scss';

.container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  color: rgba(0,0,0,.6);
  background-color: #f3f3f4;
}
.box {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
h1 {
  margin-top: -2rem;
  font-size: .6rem;
  font-weight: 100;
}
h3, h4, .back {
  line-height: 2;
}
h4 {
  font-weight: normal;
}
.back {
  color: $primary-color;
  text-decoration: none;
  font-size: .16rem;
}
</style>
