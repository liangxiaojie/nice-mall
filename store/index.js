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
    async getWxUserinfo({ commit, state }, code) {
      const client = this.app.apolloProvider.defaultClient
      try {
        const { wxUserinfo } = await getWxUserinfo(client, code)
        commit('userLogin', wxUserinfo)
      } catch (error) {
        if (error.statusCode === '401') {
          commit('userLogin', null)
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
      function onBridgeReady() {
        WeixinJSBridge.invoke('getBrandWCPayRequest', {
          appId, timeStamp, nonceStr, package: prepay.package, paySign, signType
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

    },
  },
  getters: {
    user: state => state.wxUserinfo,
    orderInfo: state => state.orderInfo
  }
}
