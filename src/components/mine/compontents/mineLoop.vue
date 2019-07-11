<template>
  <div class="minel">
      <div class="mlo">
        <div></div>
        <p>为你优选</p>
      </div>
      <ul>
        <li v-for="(relp,index) in ordlop" :key="index">
          <img :src="relp.img" alt="">
          <p class="p1">{{relp.title}}</p>
          <p class="p2">
            ￥{{relp.money}}
            <img :src="relp.imgs" alt="">
          </p>
        </li>
      </ul>
  </div>
</template>

<script>
import {getOrderLoop} from '@/api'
export default {
  data () {
    return {
      ordlop: []
    }
  },
  async created () {
    this.ordlop = await getOrderLoop()
  }
}
</script>

<style scoped lang="less">
.minel{
  width: 100%;
  .mlo{
    width: 100%;
    border-bottom: 2px solid #e0e0e0;
    height: 80px;
    background: white;
    div{
      width: 4px;
      height: 28px;
      margin: 30px 40px;
      background: black;
      float: left;

    }
    p{
      font-size: 28px;
      line-height: 80px;
    }
  }
  ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    li{

      width: 42%;
      height: 660px;
      padding: 0 4%;
      background: white;
      img{
        width: 100%;
        height: 420px;
      }
      .p1{
        font-size: 24px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        height: 64px;
        padding-top: 40px;
      }
      .p2{
        font-size: 24px;
        padding-top: 40px;
        img{
          width: 56px;
          height: 56px;
          float: right;
        }
      }
    }
  }
}
</style>
