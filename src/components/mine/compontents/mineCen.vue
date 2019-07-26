<template>
  <div class="pc">
      <ul>
          <li v-for="(pc,index) in pail" :key="index">
              <router-link :to="{path:pc.href}">
                   <div>
                  <img :src="pc.img1" alt="">
              </div>
              <p>
                  {{pc.centitle}}
                  <img :src="pc.imgs" alt="">
              </p>
              </router-link>

          </li>
      </ul>
    </div>
</template>

<script>
import {getMineCen} from '@/api'
export default {
  data () {
    return {
      pail: []
    }
  },
  async created () {
    this.pail = await getMineCen()
  }
}
</script>

<style scoped lang="less">
.pc{
    width: 100%;
    ul{
        width: 100%;
        list-style-type: none;
        li{
            width: 100%;
            height: 88px;
            background: white;
            &:nth-last-of-type(2){
                margin-top: 20px;
                border-bottom: 2px solid #e0e0e0;
            }
            &:first-child{
                border-bottom: 2px solid #e0e0e0;
            }
            a{
                text-decoration: none;
                color: #333;
                div{
                    width: 48px;
                    height: 44px;
                    padding: 16px 24px 12px 16px;
                    float: left;
                    img{
                        width: 100%;
                    }
                }
                p{
                    line-height: 88px;
                    font-size: 28px;
                    img{
                        float: right;
                        width: 80px;
                        height: 80px;
                    }
                }
            }
        }
    }
}
</style>
