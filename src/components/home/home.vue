<template>
    <div class="home">
      <!-- 头部搜索框 -->
      <HomeNav></HomeNav>
      <!-- 轮播图 -->
      <Carasel></Carasel>
      <!-- 分类导航 -->
      <HomeCate></HomeCate>
      <!-- 品牌街 -->
      <Brand></Brand>
      <Hot></Hot>
      <!-- 广告图 -->
      <div class="banner">
        <router-link to='/coupon'>
          <img src="//img10.static.yhbimg.com/yhb-img01/2017/11/16/14/01f28721040918d34d66531cb1c4b88efe.jpg?imageView2/3/w/640/h/200/q/60" alt="">
        </router-link>
      </div>

      <div class="popul">
        <h2>人气单品排行</h2>
      </div>

      <div class="populpic">
        <img src="//img10.static.yhbimg.com/yhb-img01/2019/04/08/15/01a1b6d4b1618b3f8860cfc1244e8ac857.jpg?imageView2/2/w/640/h/200/q/90" alt="">
      </div>

      <Popul></Popul>

      <Botpic></Botpic>

      <BottonNav></BottonNav>
    </div>
</template>
<script>
import HomeNav from './components/homeNav.vue'
import Carasel from './components/carasel.vue'
import HomeCate from './components/homecate.vue'
import Brand from './components/brand.vue'
import Popul from './components/popul.vue'
import Botpic from './components/botpic.vue'
import Hot from './components/hot.vue'
import BottonNav from './components/bottonnav.vue'

export default {
  created () {
  },
  components: {
    HomeNav,
    Carasel,
    HomeCate,
    Brand,
    Popul,
    Botpic,
    Hot,
    BottonNav
  }
}
</script>
<style scoped>
.home{
  padding-bottom: 100px;
}
.banner img{
  width: 100%
}
.popul h2 {
    color: #000;
    font-size: 40px;
    height: 92px;
    text-align: center;
    line-height: 92px;
    background: #F0F0F0;
}
.populpic {
  height: 236px;
}
.populpic img {
  width: 100%;
}
</style>
