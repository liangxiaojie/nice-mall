<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="header-title">
        <i class="header-icon el-icon-search"></i>搜索商品名称
      </div>
      <div class="header-right">
        <fa-icon class="header-icon" icon="user" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
  },
  mounted() {

  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 3.75rem;
  top: 0;
  left: auto;
  right: auto;
  z-index: 99;
  box-shadow: 0 .02rem .04rem -0.01rem rgba(0,0,0,.3);
  background: #f7f8fa;
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: .42rem;
  }
  .header-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: .01rem solid #e5e5e5;
    text-align: left;
    width: 100%;
    color: rgba(0,0,0,.3);
    background-color: #fff;
    border-radius: .03rem;
    font-size: .16rem;
    margin-left: .1rem;
  }
  .header-icon {
    display: block;
    &.el-icon-search {
      padding: .08rem;
      font-size: .16rem;
      color: rgba(0,0,0,.3);
    }
    &.fa-user {
      width: .16rem;
      height: .16rem;
      color: #999;
      margin: 0 .15rem 0 .15rem;
    }
  }
}
</style>

