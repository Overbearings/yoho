<template>
  <div class="pl">
    <div class="pll">
      <ul>
        <li v-for="(book, index) in productList" :key="index">
          <router-link :to="{path:book.url}">
            <img :src="book.imgs" alt>
          </router-link>

        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getBotpic } from '@/api'
export default {
  async created () {
    this.productList = await getBotpic()
  },
  data () {
    return {
      productList: []
    }
  },
  methods: {}
}
</script>
<style scoped lang="less">
.pll img{
     width: 100%;
     margin-top: 20px;
}
</style>
