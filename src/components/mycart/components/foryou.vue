<template>
  <div class="box1">
      <h1>为你优选新品</h1>
      <ul>
          <li v-for="(xinpin, index) in xinpinList" :key="index">
              <img :src="xinpin.img" alt="">
              <p class="p1">{{xinpin.content}}</p>
              <p class="p2">￥{{xinpin.price}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
import {getForyou} from '@/api'
export default {
  async created () {
    this.xinpinList = await getForyou()
  },
  data () {
    return {
      xinpinList: []
    }
  },
  methods: {

  }
}
</script>

<style scoped>
    .box1 {
        display: flex;
        flex-wrap: wrap;
        color: #444444;
    }
    .box1 h1 {
        width: 100%;
        font-size: 36px;
        text-align: center;
        line-height: 200px;
        font-weight: 600;
    }
    .box1 ul li {
      width: 45%;
      display: inline-block;
      vertical-align: top;
      padding: 0 2.5% 10% 2.5%;

    }
    .box1 ul li img {
      width: 100%;
    }
    .box1 ul li .p1 {
      font-size: 24px;
      padding: 6px 12px;
      margin: 18px 0 12px 0;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-weight: 500;
    }
    .box1 ul li .p2 {
      font-size: 24px;
      padding: 0 12px;
      font-weight: 600;
    }
</style>
