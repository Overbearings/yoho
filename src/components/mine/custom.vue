<template>
  <div>
      <div class="tou">
          <router-link to="/mine">
            <img class="img1" src="./imgs/zuojiantou.png" alt="">
          </router-link>
          <img class="img2" src="./imgs/fenlei.png" alt="">
          <p>客服与反馈</p>
      </div>
      <div class="sous">
          <input type="text" placeholder="有问题？点我搜搜看吧">
          <p>帮助中心</p>
      </div>
      <ul>
          <li v-for="(ct,index) in cust" :key="index">
              <img :src="ct.img1" alt="">
              <div>
                  <img :src="ct.imgs" alt="">
                  <p class="p1">{{ct.centitle}}</p>
                  <p class="p2">{{ct.p}}</p>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
import {getCusTom} from '@/api'
export default {
  data () {
    return {
      cust: []
    }
  },
  async created () {
    this.cust = await getCusTom()
  }
}
</script>

<style scoped lang="less">
div{
    background: white;
    .tou{
        width: 100%;
        height: 104px;
        background: #7ad9f9;
        .img1{
            height: 50%;
            float: left;
            margin: 24px  0 0 0;
        }
        .img2{
            float: right;
            height: 50%;
            margin: 24px 30px 0 0;
        }
        p{
            font-size: 40px;
            color: white;
            text-align: center;
            line-height: 104px;
        }
    }
    .sous{
        width: 100%;
        input{
            width: 90%;
            height: 60px;
            margin: 10px 5%;
            border-radius: 10px;
            border: none;
            background: #eaebed;
        }
        p{
            height: 70px;
            padding: 0 5%;
            background: #eaebed;
            font-size: 28px;
            line-height: 70px;
            color: #666;
        }
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        li{
            width: 100%;
            height: 120px;
            img{
                width: 60px;
                height: 60px;
                float: left;
                margin: 30px 20px;
            }
            div{
                width: 85%;
                height: 119px;
                float: right;
                border-bottom: 1px solid #b0b0b0;
                img{
                    float: right;
                }
                .p1{
                    font-size: 32px;
                    margin-top: 30px;
                }
                .p2{
                    color: #666;
                    line-height: 40px;
                }
            }

        }
    }

}
</style>
