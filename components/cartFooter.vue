<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <div class="footer-left">
        <CheckIcon :value.sync="checkAll" @change="handleCheckAllChange">全选</CheckIcon>
      </div>
      <div class="footer-title">共{{buyCount}}件 合计：<span class="price">{{totalAmount}}</span>元</div>
      <div class="footer-right">
        去结算
      </div>
    </div>
  </footer>
</template>

<script>
import{ CheckIcon } from 'vux'

const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  props: {
    buyCount: {
      type: Number,
      default: 0
    },
    totalAmount: {
      type: Number,
      default: 0
    }
  },
  components: {
    CheckIcon
  },
  data() {
    return {
      isIndeterminate: false,
      checkAll: true,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
    }
  },
  mounted() {

  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(val) {
      let checkedCount = val.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  width: 3.75rem;
  bottom: .55rem;
  left: auto;
  right: auto;
  z-index: 99;
  background: #fcfcfc;
  .footer-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: .45rem;
  }
  .footer-left {
    padding-left: .1rem;
  }
  .footer-title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    color: rgba(0,0,0,.6);
    font-size: .16rem;
  }
}
.footer-right {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.8rem;
  height: 100%;
  font-size: .16rem;
  color: rgba(255,255,255,.9);
  background-color: rgb(237, 91, 0);
}
</style>

