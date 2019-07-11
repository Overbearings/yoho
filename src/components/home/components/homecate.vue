<template>
<!-- 分类 -->
    <div class="cate">
        <ul>
            <router-link tag="li" :to="{path:cate.href}" v-for="(cate,index) in cateList" :key="index">
              <div class="imgcen">
                <img :src="cate.imgurl" alt=""/>
              </div>
              <p>{{cate.cpm}}</p>
            </router-link>
        </ul>
    </div>
</template>
<script>
import {getHomeCate} from '@/api'
export default {
  data () {
    return {
      cateList: []
    }
  },
  async created () {
    this.cateList = await getHomeCate()
  }
}
</script>
<style scoped>
.cate{
  background: white;
}
.cate ul{
    display:flex;
    flex-wrap: wrap;
}
.cate ul li{
    width: 25%;
    height: 140px;
    list-style-type: none;

}
.cate ul li div{
  width: 80px;
  height: 80px;
  margin: auto;
  margin-top: 20px;
}
.cate ul li div img{
    width: 100%;

}
.cate ul li p{
  text-align: center;
  font-size: 24px;
}

</style>
