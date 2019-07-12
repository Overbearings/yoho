<template>
  <div class="odf">
      <div>
          <ul>
              <router-link tag="li" v-for="(odf,index) in ordFen" :key="index" :to="{path:odf.href}">
                  <div v-if="odf.imgs">
                      <img :src="odf.imgs" alt="">
                  </div>
                  <span v-if="odf.cs">{{odf.cs}}</span>
                  <p>{{odf.fentitle}}</p>
              </router-link>
          </ul>
      </div>
  </div>
</template>

<script>
import {getOrderFen} from '@/api'
export default {
  data () {
    return {
      ordFen: []
    }
  },
  async created () {
    this.ordFen = await getOrderFen()
  }
}
</script>

<style scoped lang="less">
.odf{
    width: 100%;
    background: white;
    margin-bottom: 20px;
    div{
        width: 100%;
        ul{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            li{
                width: calc(100%/3);
                height: 144px;
                list-style-type: none;
                border-top: 2px solid #e0e0e0;
                div{
                    width: 56px;
                    height: 56px;
                    margin: auto;
                    padding: 20px 0;
                    img{
                        width: 100%;
                    }
                }
                span{
                    font-size: 28px;
                    text-align: center;
                    text-align: 60px;
                    display: block;
                    padding: 28px 0 20px 0;
                }
                p{
                    text-align: center;
                    font-size: 24px;
                }

            }
        }
    }
}
</style>
