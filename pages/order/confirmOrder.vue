<template>
  <div class="container">
    <appHeader title="确认订单" />
    <group>
      <cell title="收货地址" value="" is-link value-align="left"></cell>
    </group>
    <cartGoodsList :items="orderInfo ? orderInfo.cartGoodses : []" :disabledEdit="true" />
    <group>
      <CellFormPreview :list="preview" />
      <cell title="实付金额" :value="payCount"></cell>
    </group>
    <div class="app-footer-container">
      <div class="app-footer-button invert" @click="handlePayment">确认支付</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Group, Cell, CellBox, CellFormPreview } from 'vux'
import appHeader from '~/components/appHeader'
import cartGoodsList from '~/components/cartGoodsList'

export default {
  components: {
    appHeader,
    cartGoodsList,
    Group,
    Cell,
    CellBox,
    CellFormPreview
  },
  computed: {
    ...mapGetters([
      'orderInfo'
    ])
  },
  data() {
    return {
      preview: null,
      payCount: 0,
      deliveryAddress: {
        consignee: '1',
        phone_number: '2',
        address: '3',
      }
    }
  },
  mounted() {
    if (!this.orderInfo) {
      this.$router.go(-1);
    } else {
      let count = 0;
      this.orderInfo.cartGoodses.map(item => {
        count += item.goods.price * item.number
      })
      const discount = 0;
      this.preview = [{
        label: '商品总价',
        value: count
      }, {
        label: '优惠',
        value: discount
      }];
      this.payCount = count - discount
    }
  },
  methods: {
    async handlePayment() {
      const cartGoodses = this.orderInfo.cartGoodses.map(item => ({
        goods_id: item.goods._id,
        number: item.number || 1,
      }));

      await this.$store.dispatch('wxPayUnifiedorder', {
        deliveryAddress: this.deliveryAddress,
        cartGoodses: cartGoodses
      });

      // this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/variables.scss';

.container {
  margin-top: .45rem;
}
</style>
