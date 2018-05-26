<template>
  <div class="container">
    <appHeader title="租赁详情" />
    <goods type="lease" :data="lease">
      <group>
        <calendar @on-change="onChange" v-model="leaseEndTime" title="请选择租赁结束日期" show-popup-header popup-header-title="请选择租赁结束日期" disable-past></calendar>
      </group>
    </goods>
    <div class="app-footer-container">
      <a class="app-footer-button" href="tel:0551-62887811">联系客服</a>
      <div class="app-footer-button invert" @click="handleLease">我要租用</div>
    </div>
  </div>
</template>

<script>
import { Calendar, Group, Toast } from 'vux'
import appHeader from '~/components/appHeader'
import goods from '~/components/goods'

import { getLeaseById } from '~/apollo/goods'

export default {
  components: {
    appHeader,
    Calendar,
    Group,
    Toast,
    goods
  },
  async asyncData ({ app, params }) {
    let client = app.apolloProvider.defaultClient
    let { lease } = await getLeaseById(client, params.id)
    return { lease }
  },
  data() {
    return {
      leaseEndTime: undefined
    }
  },
  methods: {
    onChange() {

    },
    handleLease() {
      if (!this.leaseEndTime) {
        this.$vux.toast.text('请选择租赁结束时间');
      } else {
        const orderInfo = {
          cartGoodses: [{
            goods: this.lease,
            leaseEndTime: this.leaseEndTime
          }],
        }
        this.$store.commit('confirmOrder', orderInfo);
        this.$router.push('/order/confirmOrder');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: .45rem;
  padding-bottom: .6rem;
}
</style>
