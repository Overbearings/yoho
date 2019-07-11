<template>
<div class="t">
    <div class="search">
      <router-link to="/home"><img src="../imgs/zuojiantou.png" alt=""></router-link>
      <div class="wen">
            <p>商品列表</p>
      </div>
      <img src="../imgs/fenlei.png" alt="">
    </div>

    <div class="topnav">
      <ul>
        <li>默认</li>
        <li>新品</li>
        <li>人气</li>
        <li>价格</li>
        <li>筛选</li>
      </ul>
    </div>

    <div class="shangp">
      <ul>
        <li v-for="(link,index) in List" :key="index" >
          <router-link :to="{ path: link.url }">
            <img :src="link.img" alt="">
            <div class="sWen">
              <p>{{link.title}}</p>
              <p class="ppp">
                <span class="new">￥{{link.price}}</span>
                <span class="old">￥{{link.noprice}}</span>
                <img :src="link.pic" alt="" class="pic">
              </p>

            </div>

          </router-link>
        </li>

      </ul>
    </div>
</div>

</template>
<script>
import { getCateTx } from '@/api'

export default {
  async created () {
    this.List = await getCateTx()
  },
  data () {
    return {
      List: []
    }
  },
  methods: {}
}
</script>
<style scoped lang="less">
.t{
  background: white;
  padding-bottom: 50px;
}
    .search{
        width: 100%;
        height: 100px;
        display: flex;
        box-sizing: border-box;
        padding: 0 20px;
        justify-content: space-between;
        align-items: center;
        background: #7AD9F9;
    }
    .search img{
        width: 48px;
        height: 48px;
    }
    .search .wen{
        width: 100%;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: white;
        font-size: 36px;
    }
    .topnav {
      ul{
        display: flex;
        flex-wrap: wrap;
        height: 66px;
        border-bottom: 2px solid #e6e6e6;
        li {
          width: 20%;
          list-style: none;
          height: 66px;
          text-align: center;
          line-height: 66px;
          font-size: 28px;
          color: #999;
        }
      }
    }
    .shangp{
      margin-top: 40px;
      margin-bottom: 100px;
      ul {
        display: flex;
        flex-wrap: wrap;
        li{
          width: 44%;
          height: 600px;
          margin-left: 4%;
          float: left;
          list-style: none;
          margin-top: 10px;
          a{
            text-decoration: none;
            img{
              width: 100%;
            }
            .sWen{
              margin: 20px;
              p {
                font-size: 24px;
                color: #444;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;

              }
              .ppp{
                height: 60px;
                line-height: 60px;
                .new {
                  color: #d62927;
                  font-size: 22px;
                }
                .old {
                  font-size: 22px;
                  color: #b0b0b0;
                  text-decoration: line-through;
                }
                .pic {
                  width: 60px;
                  height: 60px;
                  float: right;
                }
              }

            }
          }
        }
      }
    }
</style>
