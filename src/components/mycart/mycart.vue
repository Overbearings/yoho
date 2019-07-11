<template>
  <div>
      <!-- 头部购物车 -->
      <HomeNav></HomeNav>
      <!-- 为你优选新品 -->
      <Foryou></Foryou>

  </div>
</template>

<script>
import HomeNav from './components/shopNav.vue'
import Foryou from './components/foryou.vue'
export default {
  data () {
    return {

    }
  },
  created () {

  },
  methods: {

  },
  components: {
    HomeNav,
    Foryou
  }
}
</script>

<style scoped>

</style>
