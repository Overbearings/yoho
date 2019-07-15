<template>
  <div class="shou">
      <router-link to="/sort">
        <i class="iconfont icon-yixianshi"></i>
           <p>分类</p>
           <span>CATEGORY</span>
      </router-link>
      <router-link to="/stroll">
          <i class="iconfont icon-huojianxianxing"></i>
           <p>逛</p>
           <span>TRENDFINDER</span>
      </router-link>
      <router-link to="/macart">
          <i class="iconfont icon-shopshoppingco"></i>
           <p>购物车</p>
           <span>SHOPPING CART</span>
      </router-link>
      <router-link to="/mine">
          <i class="iconfont icon-wode"></i>
           <p>我的</p>
           <span>MINE</span>
      </router-link>

  <router-view></router-view>
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
.shou{
  margin: 0;
  padding: 0;
    width: 100%;
    height: 2000px;
    position: fixed;
    top: 0;
    z-index: 99999;
    background: white;
    a{
      text-decoration: none;
      display: block;
      height: 100px;
      font-size: 40px;
      color: #444;
      border-bottom: 1px solid #e0e0e0;
      line-height: 100px;
      i{
        font-size: 60px;
        margin: 0 20px;

      }
      p{
        display: inline-block;
        margin-right: 10px;
      }
      span {
        font-size: 28px;
      }
    }
}
</style>
