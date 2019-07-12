<template>
  <div class="hotselling">
    <div class="search">
    <router-link to="/home">
    <img src="../imgs/zuojiantou.png" alt>
    </router-link>
    <div class="logo">
      <h2>热销排行榜</h2>
    </div>
    <img src="../imgs/right.png" alt="" @click="xianshi">
    <div class="show" v-if="isShow">
             <div class="zheng">
                 <img src="../imgs/lingxing.png" alt="">
             </div>
            <ul>
                <li>
                    <img src="../imgs/fenlei1.png" alt="">
                    <router-link to="/home"><span>首页</span></router-link>

                </li>
                <li>
                    <img src="../imgs/fenlei2.png" alt="">
                    <router-link to="/sort"><span>分类</span></router-link>
                    <!-- <div class="bottom"></div> -->
                </li>
                <li>
                    <img src="../imgs/fenlei3.png" alt="">
                    <router-link to="/mycart"><span>购物车</span></router-link>

                </li>
                <li>
                    <img src="../imgs/fenlei4.png" alt="">
                    <router-link to="/mine"><span>我的</span></router-link>

                </li>
            </ul>

        </div>
    </div>
    <img src="//img11.static.yhbimg.com/yhb-img01/2016/08/29/11/01f660bab6567b276b39ec2e4ba97f4c78.jpg?imageView2/2/w/640/h/240/q/90" alt="">
    <ul class="sort">
        <router-link to="" tag="li">T恤</router-link>
        <router-link to="" tag="li">衬衫</router-link>
        <router-link to="" tag="li">休闲裤</router-link>
        <router-link to="" tag="li">裙装</router-link>
        <router-link to="" tag="li">休闲/运动鞋</router-link>
    </ul>
    <div class="wangguan">
        <ul>
            <li v-for="(wang,index) in wangguanList" :key="index">
                    <img :src="wang.img" alt="">
                    <div class="right">
                    <div class="logo">
                        {{wang.logo}}
                    </div>
                    <h3>{{wang.title}}</h3>
                    <h4>{{wang.price}}</h4>
                    </div>
            </li>

        </ul>

    </div>
  </div>
</template>

<script>
import {getWangGuan} from '@/api'
export default {
  data () {
    return {
      wangguanList: '',
      isShow: false
    }
  },
  async created () {
    this.wangguanList = await getWangGuan()
  },
  methods: {
    xianshi () {
      this.isShow = !this.isShow
    }
  }

}
</script>

<style scoped lang="less">

.hotselling{
    background: #fff;
    height: 100%;
.search {
  width: 100%;
  height: 100px;
  display: flex;
  box-sizing: border-box;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  background: #7AD9F9;
  img {
    margin-right: 20px;
    width: 48px;
    height: 48px;
   }
  .logo {
    width: 400px;
    height: 100px;
  h2 {
      color: white;
      letter-spacing: 0.2em;
      margin-top: 12px;
      margin-left: 25%;
      line-height: 80px;
      font-size: 34px;
    }
  }
 }
 img{
     width: 100%;
     height: 300px;
 }
 .sort{
    background: #fff;
     width: 100%;
     height: 100px;
     border-bottom: 2px solid #e0e0e0;
      li{
         float: left;
         margin-left: 8%;
         font-size: 31px;
         list-style-type: none;
         text-align: center;
         line-height: 100px;
         color: #999;
     }
     .changeColor{
         color: #000;
     }

 }
 .wangguan{
    background: #fff;
     width: 100%;

     ul{
         li{
             padding: 30px 10px;

             img{
                 width: 200px;
                 height: 250px;
             }
             .right{
                 float: right;
                 width: 470px;
                 height: 250px;
                 border-bottom: 1px solid #e0e0e0;
                padding-top: 10px;
                 h3{
                     color: #444;
                     font-size: 28px;

                 }
                 h4{
                     color: #d0021b;
                     font-size: 24px;
                     padding-top: 10px;
                 }
             }

         }
     }
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
    background: #7AD9F9;
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
        a{
            text-decoration: none;
        }
      span{
        color: #fff;
        margin-left: 15%;
        font-size: 28px;
      }
    }
    }

  }
}
</style>
