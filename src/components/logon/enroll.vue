<template>
  <div class="en">
    <div class="top">
      <router-link to="/home" class="but">&lt;</router-link>
      <span>注册</span>
    </div>

    <form action>
      <!-- 手机号 -->
      <div class="form_group">
        <div class="sjh">
          <img src="./imgs/sjh.png" alt />
        </div>
        <select name='' id=''>
          <option value="" selected>中国</option>
          <option value="" selected>中国</option>
          <option value="" selected>中国</option>
          <option value="" selected>中国</option>
          <option value="" selected>中国</option>
          <option value="" selected>中国</option>
          <option value="" selected>中国</option>
        </select>
        <span>|</span>
        <input type="text" placeholder="请输入手机号" />
      </div>
      <!-- 验证码 -->
      <div class="form_code">
        <div class="yzm">
          <img src="./imgs/yzm.png" alt />
        </div>
        <input type="text" placeholder="请输入验证码" />
        <button>获取验证码</button>
      </div>

      <div class="password">
        <!-- 密码 -->
        <div class="input">
          <div class="toulogo">
            <img src="./imgs/ma.png" alt />
          </div>

          <input type="text" placeholder="请输入密码" />
        </div>

        <!-- 好友潮流口令 -->
        <div class="input">
          <div class="toulogo">
            <img src="./imgs/hy.png" alt />
          </div>

          <input type="text" placeholder="好友潮流口令(非必填)" />
        </div>
      </div>

      <!-- 图片验证 -->
      <div class="img_change">
        <span>请将下列图片点击翻转至正向朝上</span>
        <a href>换一批</a>
      </div>
      <!-- 图片 -->
      <div class="xztp">
        <ul>
          <li v-for="(xuanz,index) in xuan" :key="index">
            <img :src="xuanz.img" alt />
          </li>
        </ul>
      </div>
      <!-- 注册 -->
      <div class="form_log">
        <button>注册</button>
      </div>

      <div class="form_eneoll">
        <p>注册即表示您已阅读并同意</p>
        <a
          href="https://m.yohobuy.com/service/qaDetail?keyword=%E6%9C%8D%E5%8A%A1%E6%9D%A1%E6%AC%BE&sonId=340&parentId=250"
          target="_blank"
        >有货用户服务协议</a>
        <a
          class="conceal"
          href="https://m.yohobuy.com/service/qaDetail?keyword=%E9%9A%90%E7%A7%81%E6%9D%A1%E6%AC%BE&sonId=352&parentId=250"
          target="_blank"
        >有货隐私条款</a>
      </div>
    </form>
  </div>
</template>

<script>
import { getSpin } from '@/api'
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
.en {
  background: white;
  height: 100%;
  .top {
    width: 80%;
    margin: auto;
    padding-top: 80px;
    .but {
      width: 40px;
      height: 40px;
      border: 2px solid #444;
      border-radius: 50%;
      background: none;
      font-size: 44px;
      line-height: 40px;
      color: #444;
      text-align: center;
      float: left;
      text-decoration: none;
    }
    span {
      display: inline-block;
      width: 500px;
      text-align: center;
      font-size: 34px;
    }
  }
}
form {
  width: 80%;
  margin: auto;
  margin-top: 60px;
  .form_group {
    padding-bottom: 10px;
    border-bottom: 2px solid #e0e0e0;
    margin-bottom: 60px;
    .sjh {
      width: 24px;
      height: 24px;
      float: left;
      padding: 6px 20px 0 0;
      img {
        width: 100%;
      }
    }
    select {
      width: 25%;
      text-align: center;
      border: none;
      background: white;
    }
    span {
      font-size: 24px;
      margin-right: 10px;
    }
    input {
      border: none;
      font-size:28px;
    }
  }
  .form_code {
    padding-bottom: 16px;
    border-bottom: 2px solid #e0e0e0;
    .yzm {
      width: 30px;
      height: 30px;
      float: left;
      padding: 6px 20px 0 0;
      img {
        width: 100%;
      }
    }
    button {
      float: right;
      height: 50px;
      width: 140px;
      background: #b0b0b0;
      color: white;
      border: 2px solid #b0b0b0;
      border-radius: 50px;
      font-size: 22px;
    }
    input {
      border: none;
      font-size: 28px;
    }
  }
  .img_change {
    height: 34px;
    margin-top: 40px;
    span {
      color: #444;
      font-size: 20px;
      float: left;
      line-height: 34px;
    }
    a {
      color: #d0021b;
      text-decoration: none;
      font-size: 20px;
      float: right;
      line-height: 34px;
    }
  }
  .xztp {
    width: 100%;
    height: 136px;
    margin-top: 20px;
    ul {
      width: 100%;
      height: 136px;
      display: flex;
      margin: 0;
      padding: 0;
      li {
        width: 22%;
        margin-right: 4%;
        height: 136px;
        border: 2px solid #e0e0e0;
        list-style-type: none;
        &:nth-last-of-type(1) {
          margin-right: 0;
        }
        img {
          width: 100%;
          height: 136px;
        }
      }
    }
  }
  .form_log {
    button {
      width: 100%;
      background: #b0b0b0;
      color: white;
      height: 70px;
      text-align: center;
      line-height: 70px;
      font-size: 32px;
      border-radius: 10px;
      border: 2px solid #b0b0b0;
      margin-top: 40px;
    }
  }
  .password {
    height: 160px;
    .input {
      width: 100%;
      height: 50px;
      font-size: 28px;
      margin-top: 40px;
      border-bottom: 2px solid #e0e0e0;
      input {
        width: 90%;
        border: none;
        float: right;
      }
      div {
        width: 30px;
        height: 30px;
        float: left;
        padding: 0 20px 0 0;
        img {
          width: 100%;
        }
      }
    }
  }
  .form_eneoll {
    p {
      font-size: 20px;
      margin-top: 20px;
    }
    a {
      float: left;
      color: #c00;
      font-size: 20px;
      margin-top: 10px;
    }
    .conceal {
      margin-left: 20px;
    }
  }
}
</style>
