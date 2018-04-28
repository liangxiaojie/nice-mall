<template>
  <div class="container">
    <cartHeader />
    <cartGoodsList :items="goods" />
    <div class="divider_line"></div>
  </div>
</template>

<script>
import cartHeader from '~/components/cartHeader'
import cartGoodsList from '~/components/cartGoodsList'

export default {
  components: {
    cartHeader,
    cartGoodsList
  },
  data: function() {
    return {
      goods: [{
        imgSrc: 'http://hhfanyi.com/uploads/20180124/789ac7696528ab1efe699d725d3ead62.jpg',
        title: 'OPPO R11s 黑色（4GB+64GB）',
        price: 2599,
        count: 1,
        checked: true,
      }, {
        imgSrc: 'http://hhfanyi.com/uploads/20180124/3778f9a1f1250b59bd899822ddc869fe.jpg',
        title: 'OPPO R11s （金色）4G+64G',
        price: 2599,
        count: 1,
        checked: true,
      }, {
        imgSrc: 'http://hhfanyi.com/uploads/20180124/b428d0570ddef5b74faaa28822ecd292.jpg',
        title: 'OPPO R11s （新年红）4G+64G',
        price: 2799,
        count: 1,
        checked: true,
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: .45rem;
}
</style>
