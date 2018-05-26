<template>
  <div class="container">
    <appHeader title="确认订单" />
    <group>
      <cell title="收货地址" value="" is-link value-align="left"></cell>
    </group>
    <cartGoodsList :items="this.goodses" />
    <group>
      <CellFormPreview :list="this.preview" />
      <cell title="实付金额" value=""></cell>
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
      goodses: null,
      preview: null
    }
  },
  mounted() {
    if (!this.orderInfo) {
      this.$router.go(-1);
    } else {
      this.goodses = this.orderInfo.cartGoodses.map(cg => cg.goods);
      this.preview = [{
        label: '商品总价',
        value: ''
      }, {
        label: '优惠',
        value: ''
      }];
    }
  },
  methods: {
    handlePayment() {
      const jsApiParameters = '';
      //调用微信JS api 支付
      function jsApiCall() {
        WeixinJSBridge.invoke('getBrandWCPayRequest', jsApiParameters, function(res){
            WeixinJSBridge.log(res.err_msg);
            alert('CODE: '+res.err_code+' DESC: '+res.err_desc+' MSG: '+res.err_msg);
          }
        );
      }
      if(typeof WeixinJSBridge == "undefined"){
        if( document.addEventListener ){
          document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
        }else if (document.attachEvent){
          document.attachEvent('WeixinJSBridgeReady', jsApiCall);
          document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
        }
      } else {
        jsApiCall();
      }
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
