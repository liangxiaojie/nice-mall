<template>
  <div class="good-list">
    <div class="item" v-for="(item, key) in items" :key="key">
      <div class="checkbox-container">
        <el-checkbox v-model="item.checked"></el-checkbox>
      </div>
      <div class="good-image">
        <img :src="item.imgSrc" />
      </div>
      <div class="good-info">
        <p class="good-title">{{item.title}}</p>
        <p class="price">售价：{{item.price}}</p>
        <div class="flex-row">
          <el-input-number size="mini" v-model="item.count" :min="1"></el-input-number>
          <fa-icon class="icon-trash" icon="trash-alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.good-list {
  .item {
    display: flex;
    align-items: center;
    border-bottom: .01rem solid rgb(235, 235, 235);
    &:last-child {
      border-bottom: none;
    }
    p {
      margin-bottom: .04rem;
    }
  }
}
.good-image {
  display: flex;
  width: 1.25rem;
  height: 1.25rem;
  align-items: center;
  justify-content: center;
  img {
    display: block;
    width: 100%;
  }
}
.good-info {
  width: 2.5rem;
  box-sizing: border-box;
  padding-right: .16rem;
}
.good-title {
  font-size: .14rem;
  color: rgba(0,0,0,.87);
}
.good-discription {
  color: rgba(0,0,0,.54);
}
.flex-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price {
  display: flex;
  align-items: center;
  color: #ea625b;
  font-size: .16rem;
  .old {
    position: relative;
    top: .01rem;
    left: .01rem;
    display: block;
    margin: 0 .01rem;
    color: rgba(0,0,0,.54);
    font-size: .12rem;
  }
}
.sales {
  color: rgba(0,0,0,.54);
  line-height: 1.8;
  align-self: flex-end;
}
.icon-trash {
  font-size: .16rem;
  color: rgba(0,0,0,.4);
}
.checkbox-container {
  width: .25rem;
  text-align: right;
}
</style>
