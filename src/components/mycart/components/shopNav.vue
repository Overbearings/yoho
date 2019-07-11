<template>
  <div>
      <div class="box1">
          <p><img src="../imgs/leftjt.png" alt="">购物车</p>
      </div>
      <div class="box2">
          <p>
              <img src="../imgs/gth.png" alt="">
              请您先
              <router-link to="/logon" class="btn" href="#">登录</router-link>
              可以同步电脑和手机中的商品
          </p>
      </div>
      <div class="box3">
          <img src="../imgs/car.png" alt="">
          <p>您的购物车暂无商品</p>
          <router-link to="/home" href="#">随便逛逛</router-link>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<style scoped>

    .box1 {
        width: 100%;
        height: 104px;
        background: #7ad9f9;
        color: #FFFFFF;
    }
    .box1 p img {
        width: 60px;
        height: 60px;
        float: left;
        padding: 20px 0 0 40px;
    }
    .box1 p {
        font-size: 44px;
        text-align: center;
        line-height: 104px;
    }
    .box2 {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 98px;
        background: #F0F0F0;
        padding: 21px 24px;
        box-sizing: border-box;
        justify-content: center;
    }
    .box2 p {
        color: #24acaa;
        font-size: 32px;
        text-align: center;
        /* letter-spacing: 1px; */
    }
    .box2 p img {
        widows: 50px;
        height: 50px;
        float: left;
        padding-top: 4px;
    }
    .box2 p a {
        display: inline-block;
        width: 100px;
        height: 56px;
        line-height: 56px;
        background: #ED0010;
        color: #FFFFFF;
        text-decoration: none;
    }
    .box3 {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 636px;
        background: #F0F0F0;
        padding: 95px 0 158px 0;
        box-sizing: border-box;
    }
    .box3 img {
        width: 140px;
        height: 130px;
        margin: 34px auto;

    }
    .box3 p {
        display: block;
        font-size: .4rem;
        text-align: center;
        color: #444;
        padding: 40px 0;
    }
    .box3 a {
        width: 190px;
        height: 50px;
        background: #444;
        border: 2px solid #505050;
        border-radius: 10px;
        color: #fff;
        margin: 0 auto;
        font-size: .3rem;
        text-align: center;
        line-height: 50px;
        text-decoration: none;
    }
</style>
