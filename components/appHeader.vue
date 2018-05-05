<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="header-left">
        <fa-icon class="header-icon" icon="chevron-left" @click="goBack" />
      </div>
      <div class="header-title">{{title}}</div>
      <div class="header-right"></div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  mounted() {

  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/variables.scss';

.header {
  position: fixed;
  width: 3.75rem;
  top: 0;
  left: auto;
  right: auto;
  z-index: 99;
  background: $primary-color;
  color: #fff;
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: .45rem;
  }
  .header-title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    font-size: .16rem;
  }
}
.header-icon {
  display: block;
  &.svg-inline--fa {
    width: .16rem;
    height: .16rem;
    margin: 0 .15rem 0 .15rem;
  }
}
.header-right {
  width: .46rem;
}
</style>

