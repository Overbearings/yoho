<template>
  <div>
    <div class="nav">
      <router-link to="/logon" class="load">登录</router-link>
        <span class="line">|</span>
        <router-link to="/enroll" class="registe">注册</router-link>
        <a href="" class="top">
          回到顶部
          <span> &gt; </span>
        </a>
    </div>
    <div class="copy">
      <p>
        CopyRight2007-2019 南京新与力文化传播有限公司
    </p>
    </div>
  </div>
</template>

<script>

export default {

}
</script>
<style scoped lang="less">
.nav {
  height: 140px;
  width: 100%;
  background: white;
  a{
    display: inline-block;
    height: 140px;
    line-height: 140px;
    text-decoration: none;
    color: #000;
    font-size: 28px;
  }
  .load{
    margin: 0 40px;
  }
  .line {
    color: #e0e0e0;
    height: 40px;
    font-size: 28px;

  }
  .registe{
    margin: 0 40px;

  }
  .top{
    float: right;
    margin-right: 40px;
    span {
      display: inline-block;
      font-size: 32px;
    }
  }
}
.copy{
  height: 120px;
    background-color: #eee;
    color: #666;
    font-size: 28px;
    height: 120PX;
    line-height: 120PX;
    text-align: center;
}
</style>
