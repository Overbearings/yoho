<template>
    <div class="sort">
        <img src="../imgs/zuojiantou.png" alt="" >
        <div class="logo">
            <h2>个人中心</h2>
        </div>

        <img src="../imgs/right.png" alt="" @click="zhanshi" style="width:28px;height:24px">

        <div class="show" v-if="isShow">
            <div class="zheng">
                <img src="../imgs/zheng.png" alt="">
            </div>
            <ul>
                <li>
                    <img src="../imgs/right1.png" alt="">
                    <router-link to="/home"><span>首页</span></router-link>

                </li>
                <li>
                    <img src="../imgs/right2.png" alt="">
                    <router-link to="/sort"><span>分类</span></router-link>
                    <!-- <div class="bottom"></div> -->
                </li>
                <li>
                    <img src="../imgs/right3.png" alt="">
                    <router-link to="/mycart"><span>购物车</span></router-link>

                </li>
                <li>
                    <img src="../imgs/right4.png" alt="">
                    <router-link to="/mine"><span>我的</span></router-link>

                </li>
            </ul>

        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    zhanshi () {
      this.isShow = !this.isShow
    }
  }
}
</script>
<style scoped lang="less">
    .sort{
        width: 100%;
        height: 100px;
        display: flex;
        box-sizing: border-box;
        padding: 0 20px;
        justify-content: space-between;/* 两边对齐 */
        align-items: center;
        background: #000;
    }
    .sort img{
        width: 56px;
        height: 56px;
    }
    .sort .logo{
        widows: 400px;
        height: 100px;
    }

    .sort .logo h2{
        color: white;
        letter-spacing: 0.2em;
        margin-top: 12px;
        line-height: 80px;

    }
    .show{
    .zheng{
      width: 60px;
      height: 60px;
      border: none;
      position: absolute;
      left: 200px;
      transform: translate(0px,-26px);
      img{
         width: 60px;
         height: 60px;
      }
    }
     position: absolute;
     left: 61%;
     top:110px;
    background: #3E4041;
    height: 340px;
    width: 280px;
    z-index: 9999;
    border: none;
    border-radius: 10px;
    // opacity: 0;
    ul {
        margin-top: 8%;
      li{
      list-style: none;
      height:80px;
      margin-left: 10%;
      img{
        display: inline-block;
        margin-top: 0;
        width: 40px;
        height: 40px;
      }
      span{
        color: #fff;
        margin-left: 15%;
        font-size: 28px;
      }
    }
    }

  }

</style>
