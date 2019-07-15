<template>
  <div class="goods">
    <div class="search">
      <router-link to="/home"><img src="../imgs/zuojiantou.png" alt=""></router-link>
      <div class="wen">
            <p>商品详情</p>
      </div>
      <img src="../imgs/fenlei.png" alt="">
    </div>

    <div  v-if='swiperSlides && swiperSlides.length > 0' class="do">
    <swiper style="height:378px;" :options="swiperOption">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img style="width:100%;" :src="slide" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

  <div v-for="(ind, index) in goodList" :key="index">
    <div class="goodname"><p>{{ind.h}}</p></div>
    <div class="goodnum">
        <p>
            <span class="new">{{ind.newNum}}</span>
            <span class="old">{{ind.oldNum}}</span>
        </p>
    </div>
    <div class="goodwen">
        <p>
            <span class="cu">促</span>
            <span>{{ind.xia}}</span>
        </p>
    </div>
  </div>

  <div class="goodping">
      <ul>
          <li>商品评价(0)</li><li class="wenti">常见问题</li>
      </ul>
      <div class="goodping_wen">
        <div><span>Q</span><p>商品都是正品吗?</p></div>
        <div><span>A</span><p class="www">有货www.yohobuy.com所售的商品均经品牌授权，正品保障，请您放心购买。</p></div>
        <div><span>Q</span><p>尺码表上的尺码标准吗？?</p></div>
        <div><span>A</span><p class="www">有货所售商品尺寸均为人工实物测量，可能会存在1-2cm的正常误差范围。</p></div>
    </div>
      <div class="geng"><p>查看更多 &gt;</p></div>

      <div class="dian">
          <div>
                <a href=""><img src="//img11.static.yhbimg.com/yhb-img01/2018/01/31/16/0100df5494ec7efdfdb7c902ba69a8e6c4.jpg?imageMogr2/thumbnail/47x47/extent/47x47/background/d2hpdGU=/position/center/quality/80" alt=""></a>
                <a href="" class="ty">TYAKASHA</a>
                <a href="" class="jin">进入店铺 &gt;</a>
          </div>
      </div>

      <div class="xinxi">
          <div class="pro">
            <p>商品信息</p> <span>PRODUCT INFO</span>
          </div>

      </div>
  </div>

  <div class="goodimg">
      <ul>
          <li v-for="(pic, index) in goodpic" :key="index">
              <img :src="pic" alt="" style="width:100%">
          </li>
      </ul>
  </div>

  </div>
</template>

<script>

import {getGood, getGoods, getGoodpic} from '@/api'

export default {
  name: 'carrousel',
  async created () {
    this.swiperSlides = await getGood()
    this.goodList = await getGoods()
    this.goodpic = await getGoodpic()
  },
  data () {
    return {
      swiperOption: {
        //   这个配置是swiper4 配置
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: true
        }
      },
      swiperSlides: [],
      goodList: [],
      goodpic: []
    }
  },
  mounted () {

  }
}
</script>

<style scoped lang="less">
.goods{
    background: white;
    li{
        list-style: none;
    }
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
    img{
        width: 48px;
        height: 48px;
    }
    .wen{
        width: 100%;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: white;
        font-size: 36px;
    }
}
.do{
    width: 70%;
    margin: 40px auto;
    .img{
        width: 100%;
    }
}
.goodname {
    height: 160px;
    background: #515150;
    font-size: 32px;
    color: white;
    p{
        width: 90%;
        padding: 35px;
        line-height: 50px;
    }
}
.goodnum {
    width: 100%;
    margin: auto;
    height: 100px;
    font-size: 40px;
    color: #D0021B;
    border-bottom: 1px solid #e0e0e0;
    p{
        width: 90%;
        margin: auto;
        span{
            display: inline-block;
            height: 100px;
            line-height: 100px;
        }
        .old {
            color: #b0b0b0;
            text-decoration: line-through;
            margin-left: 20px;
        }
    }
}
.goodwen{
    width: 100%;
    height: 100px;
    p {
        width:90%;
        height: 100px;
        margin: auto;
        line-height: 100px;
        span {
            font-size: 32px;
            color: #444;
            margin-left: 10px;
        }
        .cu{
            width: 34px;
            height: 40px;
            display: inline-block;
            background: #D0021B;
            font-size: 24px;
            color: white;
            text-align: center;
            line-height: 40px;
            border-radius: 5px;
            margin-left: 0;
        }
    }
}
.goodimg {
    width: 90%;
    margin: auto;
}
.goodping {
    background: #f0f0f0;
    padding-top: 30px;
    height: 820px;
    ul{
        display:flex;
        flex-wrap: wrap;
        height: 100px;
        background: white;
        border-bottom: 1px solid #e0e0e0;
        li{
            width: 49%;
            height: 70px;
            text-align: center;
            line-height: 70px;
            color: #b0b0b0;
            font-size: 32px;
            margin: auto;
            border-right: 1px solid #b0b0b0;
        }
        .wenti {
            color:#000;
            border: none;
        }
    }
    .goodping_wen {
        background: white;
        width: 100%;
        padding-top: 20px;
        padding-bottom: 20px;
        div{
            width: 90%;
            margin: auto;
            margin-top: 20px;
            display: flex;
            justify-content: space-around;
            span {
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    font-size: 14px;
                    color:white;
                    background: #444;
                    border-radius: 30px;
                    text-align: center;
                    line-height: 30px;
                    margin-top: 10px;
                }
            p{
                display: inline-block;
                width: 90%;
                color: #444;
                font-size: 28px;
            }
            .www {
                color:#b0b0b0;
            }
        }
    }
    .geng{
        width: 100%;
        height: 100px;
        background: white;
        border-bottom: 1px solid #e0e0e0;
        border-top: 1px solid #e0e0e0;
        p{
            width: 90%;
            margin: auto;
            font-size: 32px;
            color: #b0b0b0;
            text-align: center;
            line-height: 100px;
        }
    }
    .dian {
        height: 100px;
        background: white;
        margin: 30px 0;
        div{
            width: 90%;
            margin: auto;
            display: flex;
            a{
                text-decoration: none;
                display: inline-block;
            }
            .ty{
                font-size: 40px;
                color: #444;
                width: 60%;
                line-height: 100px;
            }
            .jin{
                font-size: 32px;
                color:#b0b0b0;
                float: right;
                line-height: 100px;
            }
        }
    }
    .xinxi {
        background: white;
        height: 100px;
        .pro {
            height: 100px;
            width: 90%;
            margin: auto;
            line-height: 100px;
            border-bottom: 1px solid #e0e0e0;
            p{
                display: inline-block;
                font-size: 32px;
                color: #444;
            }
            span {
                font-size: 20px;
                color: #a0a0a0;
                margin-left: 10px;
            }
        }
    }
}
</style>
