<template>
  <div class="cou">
    <div class="search">
      <router-link to="/home"><img src="../imgs/zuojiantou.png" alt=""></router-link>
      <div class="wen">
            <p>领券中心</p>
      </div>
      <img src="../imgs/fenlei.png" alt="">
    </div>
    <div class="pic">
        <img src="//img11.static.yhbimg.com/yhb-img01/2018/04/04/10/012bc76d4b7634c88ca4f322be25809567.jpg?imageView2/2/w/640/h/240/q/60" alt="">
    </div>
    <div class="youhui">
        <router-link to="/home">
            <img src="//img11.static.yhbimg.com/yhb-img01/2016/05/25/15/01205da87b57469cad656644bbed4cb4f6.jpg?imageView2/2/w/0/h/0/q/60" alt="">
        </router-link>
        <router-link to="/home">
            <img src="//img10.static.yhbimg.com/yhb-img01/2019/07/01/10/01050d8eb345c26ac4bd00ec7165a9ea7e.png?imageView2/2/w/0/h/0/q/60" alt="">
        </router-link>
        <router-link to="/home">
            <img src="//img11.static.yhbimg.com/yhb-img01/2018/03/02/10/01c34132a8e2ed9ec3d994720ee99147a2.jpg?imageView2/2/w/0/h/0/q/60" alt="">
        </router-link>
        <router-link to="/home">
            <img src="//img11.static.yhbimg.com/yhb-img01/2019/07/01/10/016fe38583e47a69d674a8a653f3e62a5a.png?imageView2/2/w/0/h/0/q/60" alt="">
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped lang="less">
.cou{
    height: 100%;
    background: white;
}
.search{
    width: 100%;
    height: 100px;
    display: flex;
    box-sizing: border-box;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    background: #7AD9F9;
    img{
        width: 48px;
        height: 48px;
    }
    .wen{
        width: 100%;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: white;
        font-size: 38px;
    }
}
.pic {
    img{
        width: 100%;
    }

}
.youhui {
    img {
        width: 100%;
    }
}
</style>
