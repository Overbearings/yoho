<template>
    <div>
        <MineNav></MineNav>

        <MineBj></MineBj>

        <MineOrder></MineOrder>

        <MineFen></MineFen>

        <MineCen></MineCen>

        <div class="imgs1">
          <img src="//img11.static.yhbimg.com/yhb-img01/2017/12/18/17/015ca6b18d8571b763e583a288646f737c.jpg?imageView2/3/w/640/h/200/q/60" alt="">
        </div>

        <div class="imgs2">
          <img src="//img11.static.yhbimg.com/yhb-img01/2017/11/16/16/0170b0b5b96d1dc3cfd8a23599cc3eb425.jpg?imageView2/3/w/640/h/200/q/60" alt="">
        </div>

        <MineLoop></MineLoop>

        <Minebto></Minebto>
    </div>
</template>
<script>
import MineNav from './compontents/mineNav.vue'
import MineBj from './compontents/mineBj'
import MineOrder from './compontents/mineOrder.vue'
import MineFen from './compontents/mineFen.vue'
import MineCen from './compontents/mineCen.vue'
import MineLoop from './compontents/mineLoop.vue'
import Minebto from './compontents/minebot.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    MineNav,
    MineBj,
    MineOrder,
    MineFen,
    MineCen,
    MineLoop,
    Minebto
  },
  created () {

  }
}
</script>
<style scoped lang="less">
.imgs1{
  width: 100%;
  height: 180px;
  margin: 20px 0;
  img{
    width: 100%;
  }
}
.imgs2{
  width: 100%;
  height: 234px;
  margin-bottom: 20px;
  img{
    width: 100%;
  }
}
</style>
