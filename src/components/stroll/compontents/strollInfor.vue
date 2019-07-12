<template>
  <div class="formt">
      <!-- 资讯 -->
      <ul>
        <li class="picbot" v-for="(zx,index) in zixun" :key="index">
          <img :src="zx.img" alt="">
          <h1>{{zx.titles}}</h1>
          <p>{{zx.text}}</p>
          <div class="timer">
            <img src="../imgs/time.png" alt="">
            <p>{{zx.month}}<span>{{zx.time}}</span></p>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
import {getZiXun} from '@/api'
export default {
  data () {
    return {
      zixun: []
    }
  },
  async created () {
    this.zixun = await getZiXun()
  }
}
</script>

<style scoped lang="less">
.formt{
  width: 100%;
  ul{
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    li{
      width: 100%;
      background: white;
      margin-bottom: 30px;
      img{
        width: 100%;
        height: 320px;
      }
      h1{
        font-size: 36px;
        letter-spacing: 0.2em;
        margin: 40px 0;
        padding: 0 40px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      p{
        font-size: 26px;
        padding: 0 40px;
        line-height: 46px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
      }
      .timer{
        width: 40%;
        height: 70px;
        float: right;
        margin: 40px 0;
        img{
          width: 40px;
          height: 40px;
          float: left;
          margin-top: 10px;
        }
        p{
          padding: 0 10px;
          margin: 0;
          line-height: 60px;
          color: #999;
        }
        span{
          padding-left: 30px;
        }
      }
    }
  }
}
</style>
