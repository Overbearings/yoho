<template>
<!-- 轮播图 -->
  <div  v-if='swiperSlides && swiperSlides.length > 0'>
    <swiper style="height:180px;" :options="swiperOption">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img style="width:100%;" :src="slide" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import {getBanner} from '@/api'
export default {
  name: 'carrousel',
  async created () {
    this.swiperSlides = await getBanner()
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
          delay: 1000,
          disableOnInteraction: true
        }
      },
      swiperSlides: []
    }
  },
  mounted () {

  }
}
</script>
