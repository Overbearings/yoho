<template>
  <div id="app">
    <BottomNav></BottomNav>

    <router-view/>
  </div>
</template>

<script>
import BottomNav from '@/common/bottomNav.vue'
export default {
  name: 'App',
  components: {
    BottomNav
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  height: 100%;
  background: #F4F8F7;
}
#app{
  height: 100%;
}
</style>
