<template>
    <div class="pl">
       <div class="pll">
           <div>
              <h2>热门品牌</h2>
           </div>
          <ul>
            <li v-for="(pic,index) in pdlist" :key="index">
              <img :src="pic.imgurl" alt="">
            </li>
          </ul>
        </div>
    </div>
</template>
<script>
import {getHotBanner} from '@/api'
export default {
  data () {
    return {
      pdlist: []
    }
  },
  async created () {
    this.pdlist = await getHotBanner()
  }
}
</script>
<style scoped lang="less">
.pl{
  width: 100%;
  .pll{
    width: 100%;
    div{
      padding: 20px 0;
      h2{
        color: #000;
        font-size: 30PX;
        text-align: center;
      }
    }
    ul{
      width: 100%;
      display:flex;
      flex-wrap: wrap;
      li{
        list-style-type: none;
        width: 25%;
        box-sizing: border-box;
        border-right: 2px solid #e7e7e7;
        border-bottom: 2px solid#e7e7e7;
        &:last-child {
            width: 50%;
          }
        img{
          width: 100%;
        }
      }
    }
  }
}

</style>
