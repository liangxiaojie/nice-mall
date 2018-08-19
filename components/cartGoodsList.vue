<template>
  <div class="good-list">
    <div class="item" v-for="(item, key) in cartGoodses" :key="key">
      <div class="checkbox-container" v-if="!disabledEdit" >
        <CheckIcon :value.sync="item.checked" />
      </div>
      <div class="good-image">
        <img :src="item.goods.imgSrc" />
      </div>
      <div class="good-info">
        <p class="good-title">{{item.goods.name}}</p>
        <p class="price">售价：{{item.goods.price}}</p>
        <div class="flex-row">
          <inline-x-number v-if="!disabledEdit" v-model="item.number" :min="1" />
          <span v-else>数量：{{item.number}}</span>
          <fa-icon v-if="!disabledEdit" class="icon-trash" icon="trash-alt" @click="handleDelete(item)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckIcon, InlineXNumber } from 'vux'
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    disabledEdit: {
      type: Boolean,
      default: () => false
    }
  },
  components: {
    CheckIcon,
    InlineXNumber
  },
  data() {
    return {
      cartGoodses: null
    }
  },
  watch: {
    items(val, oldVal) {
      if (val && val.length > 0) {
        this.cartGoodses = val.map(d => ({ ...d }));
      }
    },
  },
  mounted() {
    if (this.items && this.items.length > 0) {
      this.cartGoodses = this.items.map(d => ({ ...d }));
    }
  },
  methods: {
    handleDelete(item) {
      this.$store.dispatch('cartGoods/DeleteCartGoods', item._id)
    }
  }
}
</script>

<style lang="scss" scoped>
.good-list {
  background-color: #fff;
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
    /deep/ .el-input-number {
      width: 1rem;
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
  width: .28rem;
  text-align: right;
}
</style>
