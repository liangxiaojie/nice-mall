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
    async getUserinfo({ commit, state }) {
      const user = await this.$axios.$get('https://api.weixin.qq.com/sns/userinfo?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN')
      commit('userLogin', {
        "openid":" OPENID",
        "nickname": NICKNAME,
        "sex":"1",
        "province":"PROVINCE",
        "city":"CITY",
        "country":"COUNTRY",
        "headimgurl": "http://thirdwx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/46",
        "privilege":[ "PRIVILEGE1", "PRIVILEGE2"],
        "unionid": "o6_bmasdasdsad6_2sgVt7hMZOPfL"
      })
    }
  },
  getters: {
    user: state => state.wxUserinfo,
    orderInfo: state => state.orderInfo
  }
}
