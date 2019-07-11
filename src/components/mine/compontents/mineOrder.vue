<template>
  <div class="ord">
      <div v-for="(mot,index) in mineOlist" :key="index">
          <p>
              {{mot.ortitle}}
              <span>
                {{mot.chtitle}}

              </span>
              <img :src="mot.imgs" alt="">
            </p>
      </div>
  </div>
</template>

<script>
import {getOrderP} from '@/api'
export default {
  data () {
    return {
      mineOlist: []
    }
  },
  async created () {
    this.mineOlist = await getOrderP()
  }
}
</script>

<style scoped lang="less">
.ord{
    width: 100%;
    div{
       height: 80px;
       background: white;
       padding: 0 0 0 36px;
       &:first-child{
           margin-bottom: 20px;
       }

       p{
           font-size: 30px;
           line-height: 80px;
           position: relative;
           span{
               font-size: 26px;
               float: right;
               height: 80px;
               padding-right: 48px

           }
            img{
              position: absolute;
              right: 0;
              top: 12px;
              width: 60px;
            }
       }
    }
}
</style>
