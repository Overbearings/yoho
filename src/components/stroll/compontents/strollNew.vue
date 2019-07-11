<template>
  <!-- 轮播图 -->
  <div class="bott">
    <div v-if="strzx && strzx.length > 0">
      <swiper style="height:360px;" :options="swiperOption">
        <swiper-slide v-for="(slide, index) in strzx" :key="index">
          <img style="width:100%;height:360px;" :src="slide" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="bianli" v-for="(sbl,index) in strobl" :key="index">
      <div class="tup">
        <img :src="sbl.img" alt />
      </div>
      <p class="op1">{{sbl.text}}</p>
      <p class="op2">{{sbl.p}}</p>
      <p class="op3">
        {{sbl.read}}
        <span ref="num">{{sbl.num}}</span>
        <img :src="sbl.imgs" alt="" ref="color" @click="changeImg(index)"/>
      </p>
      <div class="sroll">
        <ul v-if="sbl.child" ref="myul">
          <li v-for="(sbll,index) in sbl.child" :key="index" ref="myli">
            <img :src="sbll.image" alt />
            <p class="opc1">{{sbll.titles}}</p>
            <p class="opc2">￥{{sbll.money}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getStrNew, getStrBl } from '@/api'

export default {
  name: 'carrousel',
  async created () {
    this.strzx = await getStrNew()
    this.strobl = await getStrBl()
    this.$nextTick(() => {
      this.strobl.forEach((stb, index) => {
        if (stb.child) {
          var liWidth = this.$refs.myli[0].offsetWidth
          var width = liWidth * stb.child.length
          this.$refs.myul[index].style.width = width + 'px'
        }
      })
    })
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
      strzx: [],
      strobl: []
    }
  },
  methods: {
    changeImg (index) {
      // console.log(this.$refs.color[index])
      // console.log(this.$refs.num[index].innerText)
      var num = this.$refs.num[index].innerText
      var c = window.getComputedStyle(this.$refs.color[index], null).filter
      if (c === 'grayscale(1)') {
        this.$refs.color[index].style.filter = 'grayscale(0%)'
        num = parseInt(num) + 1
        this.$refs.num[index].innerHTML = num
      } else {
        this.$refs.color[index].style.filter = 'grayscale(100%)'
        num = parseInt(num) - 1
        this.$refs.num[index].innerHTML = num
      }
    }
  }
}
</script>
<style scoped lang="less">
::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
.bott{
  margin-bottom: 100px;
}
.bianli {
  width: 100%;
  background: white;
  padding-top: 40px;
  margin-bottom: 30px;
  .tup {
    width: 90%;
    margin: auto;
    img {
      width: 100%;
    }
  }
  .op1 {
    font-size: 40px;
    white-space: nowrap; //强行文本不能换行
    overflow: hidden; //修剪溢出文本
    text-overflow: ellipsis; //用省略号标记被修剪得文本
    margin: 3% 5%;
  }
  .op2 {
    font-size: 28px;
    color: #333333;
    margin: 3% 5%;
  }
  .op3 {
    font-size: 24px;
    color: #b0b0b0;
    margin: 3% 5%;
    span {
      float: right;
      padding-right: 70px;
      line-height: 40px;
    }
    img {
      width: 40px;
      height: 40px;
      position: absolute;
      right: 7%;
      filter: grayscale(100%);
    }
  }
  .sroll {
    background: white;
    padding-bottom: 40px;
    overflow-x: auto;
    ul {
      overflow: hidden;
      list-style-type: none;
      li {
        width: 374px;
        height: 160px;
        display: inline-block;
        background: #f0f0f0;
        border-right: 10px solid #ffffff;
        border-left: 20px solid #ffffff;
        img {
          width: 33%;
          height: 100%;
          float: left;
        }
        p{
          margin-left: 140px;
        }
        .opc1{
          padding-top: 26px;
          font-size: 26px;
          color: #444444;
          display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;

        }
        .opc2{
          font-size: 24px;
          line-height: 72px;
          font-size: 20px;
          color: #d0021b;
        }
      }
    }
  }
}
</style>
