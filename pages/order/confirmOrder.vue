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
      preview: null,
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
      const cartGoodses = this.orderInfo.cartGoodses.map(item => ({
        goods_id: item.goods._id,
        number: 1,
      }));
      this.$store.dispatch('wxPayUnifiedorder', {
        deliveryAddress: this.deliveryAddress,
        cartGoodses: cartGoodses
      });

      //调用微信JS api 支付
      function onBridgeReady() {
        WeixinJSBridge.invoke('getBrandWCPayRequest', {
          "appId":"wx2421b1c4370ec43b",     //公众号名称，由商户传入
          "timeStamp": Date.now(),         //时间戳，自1970年以来的秒数
          "nonceStr":"e61463f8efa94090b1f366cccfbbb444", //随机串
          "package":"prepay_id=u802345jgfjsdfgsdg888",
          "signType":"MD5",         //微信签名方式：
          "paySign":"70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名
        }, function(res){
            WeixinJSBridge.log(res.err_msg);
            alert('CODE: '+res.err_code+' DESC: '+res.err_desc+' MSG: '+res.err_msg);
            if(res.err_msg == "get_brand_wcpay_request:ok" ) {

            } else if(res.err_msg == 'get_brand_wcpay_request:cancel') {

            } else if(res.err_msg == 'get_brand_wcpay_request:fail') {

            }
          }
        );
      }
      if (typeof WeixinJSBridge == "undefined"){
        if(document.addEventListener){
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
      } else {
        onBridgeReady();
      }

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
