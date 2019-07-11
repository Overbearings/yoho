<template>
    <div class="cate">
        <!-- 导航 -->
        <CateNav></CateNav>
        <!-- 内容 -->
        <CateContent></CateContent>
    </div>
</template>
<script>
import CateNav from './compontents/cateNav.vue'
import CateContent from './compontents/cateContent.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    CateNav,
    CateContent
  },
  created () {

  }
}
</script>
<style scoped>
.cate{
  height: 100%;
  /* overflow: hidden; */
}
</style>
