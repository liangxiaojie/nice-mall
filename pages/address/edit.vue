<template>
  <div class="container">
    <appHeader :title="titleMap[pageStatus]" />
    <group>
      <x-input title="收货人" v-model="temp.consignee"></x-input>
      <x-input title="联系电话" v-model="temp.phone_number"></x-input>
      <x-address title="所在地区" v-model="area" :list="addressData" placeholder="请选择"></x-address>
      <x-textarea title="详细地址" v-model="temp.address" placeholder="请输入详细地址信息，如道路、门牌号、小区、楼栋号、单元室等" :show-counter="false" :rows="1" autosize></x-textarea>
      <x-switch title="设为默认地址" v-model="temp.is_default"></x-switch>
    </group>
    <box gap="10px 10px">
      <x-button type="primary" @click.native="handleSave">保存</x-button>
      <x-button v-if="pageStatus === 'update'" type="warn" plain @click.native="handleDelete">删除收货地址</x-button>
    </box>
  </div>
</template>

<script>
import { XAddress, ChinaAddressV4Data, XButton, XInput, XTextarea, XSwitch, Box, Confirm } from 'vux'
import appHeader from '~/components/appHeader'
import { createDeliveryAddress, updateDeliveryAddress, deleteDeliveryAddress } from '~/apollo/deliveryAddress'

export default {
  components: {
    appHeader,
    XAddress,
    XButton,
    XInput,
    XTextarea,
    XSwitch,
    Box,
    Confirm,
  },
  data () {
    return {
      temp: {
        consignee: '',
        phone_number: '',
        address: '',
        is_default: false
      },
      titleMap: {
        create: '添加收货地址',
        update: '编辑收货地址'
      },
      pageStatus: 'create',
      area: [],
      addressData: ChinaAddressV4Data
    }
  },
  mounted() {
    const { deliveryAddress } = this.$route.query;
    if (deliveryAddress) {
      this.pageStatus = 'update'
      this.temp = deliveryAddress
    }
  },
  methods: {
    async handleSave() {
      if (this.pageStatus === 'create') {
        await createDeliveryAddress(this.$apollo, this.temp);
      } else {
        await updateDeliveryAddress(this.$apollo, this.temp);
      }
      this.$vux.toast.show('保存成功')
      this.$router.go(-1)
    },
    handleDelete() {
      this.$vux.confirm.show({
        title: '操作提示',
        content: '确定要删除该地址吗？',
        async onConfirm () {
          await deleteDeliveryAddress(this.$apollo, this.temp._id);
          this.$vux.toast.show('删除成功')
          this.$router.go(-1)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: .45rem;
}
.footer {
  position: fixed;
  bottom: 0;
  left: auto;
  right: auto;
  width: 3.75rem;
  box-sizing: border-box;
  padding: .1rem .1rem;
  background-color: #fff;
}
</style>
