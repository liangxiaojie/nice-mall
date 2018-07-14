<template>
  <div class="container">
    <appHeader title="购物车" />
    <cartGoodsList :items="cartGoodses" />
    <div class="divider_line"></div>
    <cartFooter />
    <appFooter />
  </div>
</template>

<script>
import appHeader from '~/components/appHeader'
import cartGoodsList from '~/components/cartGoodsList'
import cartFooter from '~/components/cartFooter'
import appFooter from '~/components/appFooter'
import { mapGetters } from 'vuex'

export default {
  components: {
    appHeader,
    cartGoodsList,
    cartFooter,
    appFooter
  },
  computed: {
    ...mapGetters(['cartGoodses']),
  },
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      this.$store.dispatch('cartGoods/GetCartGoodses');
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: .45rem;
  margin-bottom: 1.01rem;
  background-color: #fff;
}
</style>
