<template>
  <div class="bj">
    <div>
      <p>登陆/注册</p>
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
.bj{
  height: 204px;
  width: 100%;
  background-image: url(//cdn.yoho.cn/yohobuywap-node/img/header-bg.b98d69725a.jpg);
  background-size: 100% ;
  position: relative;
  div{
    width: 270px;
    height: 80px;
    border: 2px solid white;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    p{
      color: white;
      letter-spacing: 0.2em;
      text-align: center;
      line-height: 80px;
    }
  }
}
</style>
