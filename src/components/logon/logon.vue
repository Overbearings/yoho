<template>
  <div class="log">
    <div class="banner">
      <img style="width:100%" src="//img11.static.yhbimg.com/yhb-img01/2018/03/26/10/01cf2c685c5d7ddbb21b7c7b961da77454.jpg?imageView2/2/w/750/h/290" alt="">
      <div class="top">
        <router-link to="/home" class="but">&lt;</router-link>
        <router-link to="/enroll">注册</router-link>
      </div>
      <div class="tip">
        <p>Yoho!Family账号可登录Yoho!Buy有货 </p>
        <!-- <div class="wen">？</div> -->
      </div>
    </div>
    <!-- 登录 -->
    <form action="">
      <!-- 手机号 -->
      <div class="form_group">
        <div class="sjh">
          <img src="./imgs/sjh.png" alt="">
        </div>
        <select name="" id="">
          <option value="" selected>中国</option>
          <option value="" selected>中国</option>
          <option value="" selected>中国</option>
          <option value="" selected>中国</option>
          <option value="" selected>中国</option>
          <option value="" selected>中国</option>
          <option value="" selected>中国</option>

        </select>
        <span>|</span>
        <input type="text" placeholder="请输入手机号">
      </div>
      <!-- 验证码 -->
      <div class="form_code">
        <div class="yzm">
          <img src="./imgs/yzm.png" alt="">
        </div>
        <input type="text" placeholder="请输入验证码">
        <button>获取验证码</button>
      </div>
      <!-- 图片验证 -->
      <div class="img_change">
        <span>请将下列图片点击翻转至正向朝上</span>
        <a href="">换一批</a>
      </div>
      <!-- 图片 -->
      <div class="xztp">
          <ul>
            <li v-for="(xuanz,index) in xuan" :key="index">
              <img :src="xuanz.img" alt="">
            </li>
          </ul>
        </div>
      <!-- 登录 -->
      <div class="form_log">
        <button>登录</button>
      </div>
      <!-- 登录方式/忘记密码 -->
      <div class="form_pass">
        <router-link to="/account" class="account">账号密码登录</router-link>
        <router-link to="/home" class="forget">忘记密码？</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import {getSpin} from '@/api'
export default {
  data () {
    return {
      xuan: []
    }
  },
  async created () {
    this.xuan = await getSpin()
  }
}
</script>

<style scoped lang="less">
.log{
  background: white;
  height: 100%;
}
.banner {
  position: relative;
  .top{
    width: 80%;
    margin: auto;
    position: absolute;
    top: 60px;
    left: 10%;
    .but {
      width: 50px;
      height: 50px;
      border: 2px solid white;
      border-radius: 50%;
      background: none;
      font-size: 36px;
      color: white;
      text-align: center;
      float: left;
    }
    a{
      width: 110px;
      height: 46px;
      border: 2px solid white;
      border-radius: 50px;
      font-size: 32px;
      line-height: 50px;
      float: right;
      text-decoration: none;
      color: white;
      text-align: center;
    }
  }
  .tip {
    width: 100%;
    position: absolute;
    bottom: 20px;
    text-align: center;
    font-size: 22px;
    color: white;
  }
}
form {
  width: 80%;
  margin: auto;
  margin-top: 60px;
  .form_group{
    padding-bottom: 10px;
    border-bottom: 2px solid #e0e0e0;
    margin-bottom: 60px;
    .sjh{
      width: 24px;
      height: 24px;
      float: left;
      padding: 6px 20px 0 0;
      img{
        width: 100%;
      }
    }
    select{
      width:25%;
      text-align: center;
      border: none;
      background: white;
    }
    span {
      font-size: 24px;
      margin-right: 10px;
    }
    input{
      border: none;
      font-size: 28px;
    }
  }
  .form_code{
    padding-bottom: 16px;
    border-bottom: 2px solid #e0e0e0;
    .yzm{
      width: 30px;
      height: 30px;
      float: left;
      padding: 6px 20px 0 0;
      img{
        width: 100%;
      }
    }
    button {
      float: right;
      height: 50px;
      width: 140px;
      background: #b0b0b0;
      color:white;
      border: 2px solid #b0b0b0;
      border-radius: 50px;
      font-size: 22px;
    }
    input {
      border: none;
      font-size: 28px;
    }
  }
  .img_change{
    height: 34px;
    margin-top: 40px;
    span{
      color: #444;
      font-size: 20px;
      float: left;
      line-height: 34px;
    }
    a{
      color: #d0021b;
      text-decoration: none;
      font-size: 20px;
      float: right;
      line-height: 34px;
    }
  }
    .xztp{
    width: 100%;
    height: 136px;
    margin-top: 20px;
    ul{
      width: 100%;
      height: 136px;
      display: flex;
      margin: 0;
      padding: 0;
      li{
        width: 22%;
        margin-right: 4%;
        height: 136px;
        border: 2px solid #e0e0e0;
        list-style-type: none;
        &:nth-last-of-type(1){
          margin-right: 0;
        }
        img{
          width: 100%;
          height: 136px;
        }
      }
    }
  }
  .form_log{
    button {
      width: 100%;
      background: #B0B0B0;
      color: white;
      height: 70px;
      text-align: center;
      line-height: 70px;
      font-size: 32px;
      border-radius: 10px;
      border: 2px solid #B0B0B0;
      margin-top: 40px;
    }
  }
  .form_pass{
    margin-top: 30px;
    a{
      text-decoration: none;
      font-size: 24px;
      color: #000;
    }
    .account{
      float: left;
    }
    .forget{
      float: right;
    }
  }
}
</style>
