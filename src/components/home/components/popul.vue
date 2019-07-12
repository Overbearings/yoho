<template>
  <div class="mspro">
      <ul class="product" ref="myul">
          <li ref="myli" v-for="(book, index) in productList" :key="index">
              <img :src="book.img" alt="">
              <p class="price">￥{{book.price}}</p>
              <p class="num">{{book.num}}</p>
              <P class="browse">{{book.browse}}</P>
          </li>
      </ul>
    </div>
</template>

<script>

import {getHuadong} from '@/api'
export default {
  async mounted () {
    this.productList = await getHuadong()
    this.$nextTick(() => {
      // 获取li的宽度
      var liWidth = this.$refs.myli[0].offsetWidth + 1
      // productList.length是总共的li长度  因为li数据都在productList数组中
      var width = liWidth * this.productList.length
      this.$refs.myul.style.width = width + 'px'
    })
  },
  data () {
    return {
      productList: []
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
  //去横滚动条
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
    .mspro {
          width: 100%;
          overflow-x: auto;
        }
    .product {
        background: white;
          font-size: 0;
          // width: 820px;
          li {
            width: 180px;
            height: 340px;
            padding: 20px;
            display: inline-block;
            // box-sizing: border-box;
            //顶部对齐
            vertical-align: top;
            img {
            width: 100%;
            }
            p{
                text-align: center;
                line-height: 32px;
            }
            .price {
              color: #444;
                font-size: 24px;
                margin-top: 10px;
            }
            .num {
              color: #b0b0b0;
                font-size: 20px;
            }
            .browse {
              color: #b0b0b0;
                font-size: 20px;
            }
          }
    }
</style>
