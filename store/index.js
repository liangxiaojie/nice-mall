import { getWxUserinfo } from '~/apollo/wxUser'
import { createOrder } from '~/apollo/order'

export default {
  state() {
    return {
      wxUserinfo: null,
      orderInfo: null
    }
  },
  mutations: {
    userLogin(state, wxUserinfo) {
      state.wxUserinfo = wxUserinfo
    },
    confirmOrder(state, orderInfo) {
      state.orderInfo = orderInfo
    }
  },
  actions: {
    async getWxUserAuth({ commit, state }) {
      const successUrl = window.location.pathname
      const { success, data } = await this.$axios.$post('/api/auth/wxLogin', {successUrl});
      if (success) {
        window.location.href = data.url;
      }
    },
    async getWxUserinfo({ commit, dispatch, state }, code) {
      const client = this.app.apolloProvider.defaultClient
      try {
        const { wxUserinfo } = await getWxUserinfo(client, code)
        commit('userLogin', wxUserinfo)
      } catch (error) {
        if (error.statusCode === '401') {
          dispatch('getWxUserAuth')
        }
      }
    },
    async wxPayUnifiedorder({ commit, state }, orderInfo) {
      const client = this.app.apolloProvider.defaultClient
      const data = await createOrder(client, orderInfo)
      // commit('orderInfo', orderInfo)

      const prepay = data.createOrder.prepay;
      const { appId, timeStamp, nonceStr, paySign, signType } = prepay;

      //调用微信JS api 支付
      const onBridgeReady = () => {
        WeixinJSBridge.invoke('getBrandWCPayRequest', {
          appId, timeStamp, nonceStr, package: prepay.package, paySign, signType
        }, (res) => {
            if(res.err_msg == "get_brand_wcpay_request:ok" ) {
              this.$vux.toast.show({
                type: 'success',
                width: '1.5rem',
                text: '支付成功',
              })
            } else if(res.err_msg == 'get_brand_wcpay_request:cancel') {
              this.$vux.toast.show({
                type: 'error',
                width: '1.5rem',
                text: '已取消支付',
              })
            } else if(res.err_msg == 'get_brand_wcpay_request:fail') {
              alert(`CODE: ${res.err_code} DESC: ${res.err_desc} MSG: ${res.err_msg}`);
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

    },
  },
  getters: {
    user: state => state.wxUserinfo,
    orderInfo: state => state.orderInfo,
    cartGoodses: state => state.cartGoods.cartGoodses
  }
}
