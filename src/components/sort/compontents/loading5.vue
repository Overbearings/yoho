 <template>
  <div class="loading">
    <img
      src="//img10.static.yhbimg.com/yhb-img01/2019/07/08/15/012566340fffcfd7dbf3507e1029e3add2.jpg?imageView2/2/w/640/h/240/q/60"
      alt
    />
    <div class="jies">
      <div class="zhuanq">
        <ul>
          <li>
            <p>
              精品推荐
              <span>></span>
            </p>
          </li>
          <li>
            <p>
              优惠专区
              <span>></span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="zhonglei">
      <img src="../imgs/henggang.png" alt />
      <span>分类</span>
      <img src="../imgs/henggang.png" alt />
    </div>
    <ul class="shop">
      <li v-for="(product,index) in MsListright" :key="index">
        <img :src="product.img" alt />
          <p>{{product.title}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { getCateListright5 } from '@/api'
export default {
  data () {
    return {
      flag: false,
      cateList: [],
      currentid: 0,
      leftscroll: null,
      MsListright: ''
    }
  },
  async created () {
    this.MsListright = await getCateListright5()
  },
  methods: {
    isShow () {
      this.flag = true
    },
    isHide () {
      this.flag = false
    }
  }
}
</script>

<style scoped lang="less">
.loading {
  width: calc(100% - 160px);
  height: 100%;
  overflow-y: auto;
}
.loading img {
  width: 100%;
  height: 240px;

}
.jies {
  width: 100%;
  height: 160px;
  .zhuanq {
    width: 100%;
    ul {
      display: flex;
      li {
        list-style-type: none;
        width: 45%;
        height: 120px;
        margin-top: 20px;
        background: #ffffff;
        border-radius: 10px;
        &:first-child{
          margin: 3% 3% 0 3%;
        }
        p{
          line-height: 120px;
          padding-left: 20px;
          font-size: 34px;
          span{
            float: right;
            padding-right: 16px;
          }
        }
      }
    }
  }
}

.zhonglei {
  text-align: center;
  width: 94%;
  background: white;
  margin: 0 20px 10px 20px;
}

.zhonglei img {
  width: 80px;
  height: 40px;
}
.zhonglei span {
  font-size: 36px;
  height: 80px;
  line-height: 80px;
}
.shop {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.shop li {
  width: calc(88%/3);
  height: 300px;
  list-style: none;
  margin-left: 3%;
}
.shop img {
  width: 80%;
  margin-left: 10%;
  height: 160px;
  border-radius: 50%;
}
.shop p {
  height: 60px;
  text-align: center;
  font-size: 34px;
  color: #444;
  padding-top: 30px;
}

</style>
