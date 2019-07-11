 <template>
  <div class="loading">
    <img
      src="//img11.static.yhbimg.com/yhb-img01/2019/06/27/16/01b191a3ec55edf9cec55438e0c57f3558.jpg?imageView2/2/w/640/h/240/q/60"
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
      <span>猜你喜欢</span>
      <img src="../imgs/henggang.png" alt />
    </div>
    <ul class="shop">
      <li v-for="(product,index) in MsListright" :key="index">
        <img :src="product.img" alt />
        <div class="title">
          <p>{{product.title}}</p>
          <div class="price">
            <span>￥{{product.price}}</span>
            <h4>￥{{product.noprice}}</h4>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getCateListright } from '@/api'
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
    this.MsListright = await getCateListright()
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
  height: 220px;
}
.jies {
  width: 100%;
  height: 160px;
  margin: 20px;
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
          margin-right: 3%;
        }
        p{
          line-height: 60px;
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
  margin: 0 20px 20px 20px;
}

.zhonglei img {
  width: 80px;
  height: 40px;
}
.zhonglei span {
  font-size: 36px;
  height: 100px;
  line-height: 100px;
}
.shop {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.shop li {
  width: 45%;
  list-style: none;
  margin-left: 20px;
  background: white;
}
.shop img {
  height: 360px;
}
.title {
  width: 90%;
  margin-left: 5%;
  margin-top: 20px;
}
.title p {
  display: inline-block;
  height: 60px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 24px;
  color: #444;
}
.title span {
  display: inline-block;
  color: #d62927;
  font-size: 24px;
}
.title h4 {
  display: inline-block;
  color: #666;
  font-size: 20px;
  text-decoration: line-through #444;
}
.price {
  margin-top: 10px;
  margin-bottom: 40px;
}
</style>
