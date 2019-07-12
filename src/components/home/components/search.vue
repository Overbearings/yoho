<template>
  <div>
      <div class="search">
    <router-link to="/home">
    <img src="../imgs/zuojiantou.png" alt>
    </router-link>
    <div class="logo">
      <h2>搜索</h2>
    </div>
    <img src="../imgs/right.png" alt>
    </div>
    <div class="search1">
        <div>
        <img src="../imgs/search.png" alt="">
        <input type="text" placeholder="yiigoo 壹果">
        </div>
        <span>搜索</span>
    </div>
    <div class="center">
        <div>
            <div class="center-one">
                <span>最近搜索</span>
                <img src="../imgs/delate.png" alt="">
            </div>
            <div class="center-two">
                <p>yiigoo 壹果</p>
            </div>
            <div class="center-three">
                <p>猜你想找</p>
                <div class="search-content">
                    <ul>
                        <li><a>速写CROQUIS</a></li>
                        <li><a>短裤</a></li>
                        <li><a>短袖T恤</a></li>
                        <li><a>夹克</a></li>
                        <li><a>卫衣</a></li>
                        <li><a>休闲裤</a></li>
                        <li><a>MO&Co.</a></li>
                        <li><a>JNBY</a></li>
                        <li><a>Genanx</a></li>
                        <li><a>AliyaStore</a></li>
                    </ul>
                </div>
            </div>
        </div>
    <div class="nav">
      <router-link to="/logon" class="load">登录</router-link>
        <span class="line">|</span>
        <router-link to="/enroll" class="registe">注册</router-link>
        <a href="" class="top">
          回到顶部
          <span> &gt; </span>
        </a>
    </div>
    </div>
    <div class="copy">
      <p>
        CopyRight2007-2019 南京新与力文化传播有限公司
    </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped lang="less">
.search {
  width: 100%;
  height: 100px;
  display: flex;
  box-sizing: border-box;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  background: #7AD9F9;
  img {
    margin-right: 20px;
    width: 56px;
    height: 56px;
   }
  .logo {
    widows: 400px;
    height: 100px;
  h2 {
      color: white;
      letter-spacing: 0.2em;
      margin-top: 12px;
      line-height: 80px;
    }
  }
}
.search1{
        width: 100%;
        height: 90px;
        background: #F8F8F8;
        display: flex;
        box-sizing: border-box;
        padding: 0 20px;
        justify-content: space-between;
        align-items: center;
        div{
            flex: 1;
            background: #FFFFFF;
            height: 60px;
            border-radius: 32px;
            display: flex;
            align-items: center;
            // margin: 0 5px;
            img{
                width: 32px;
                margin-left: 20px;
            }
            input{
                    border: none;
                    flex: 1;
                    margin-left: 10px;
                    height: 35px;
                    width: 110px;
                    background: transparent;
                    font-size:24px;
            }
        }
        span{
            width: 130px;
            font-size: 30px;
            text-align: center;
            color: #B0B0B0;
        }
    }
    .center{
        width: 100%;
        background: #f0f0f0;
        padding-top: 30px;
        div{
            background: #fff;
            .center-one{
                height: 100px;
                span{
                    color: #b0b0b0;
                    font-size: 28px;
                    line-height: 100px;
                    margin-left: 3%;
                }
                img{
                    width: 30px;
                    height: 30px;
                    margin-left: 70%;
                }
            }
            .center-two{

                height: 90px;
                p{
                    color: #000;
                    border: 1px solid #e0e0e0;
                    border-radius: 10px;
                    height: 60px;
                    width: 200px;
                    font-size: 26px;
                    text-align: center;
                    line-height: 60px;
                    margin-left: 3%;
                }
            }
            .center-three{
                margin-left: 2%;
                 padding-bottom: 240px;
                p{
                    color: #b0b0b0;
                    font-size: 28px;
                    margin-left: 2%;
                    line-height: 100px;
                }
                ul{
                    li{
                        display: inline-block;
                          margin: 0 20px;
                        a{
                          display: inline-block;
                          padding: 10px 20px;
                          height: 40px;
                          font-size: 30px;
                          border: 1px solid #e0e0e0;
                          border-radius: 10px;
                          margin-top: 30px;
                        }
                    }
                }
            }
        }

    }
.nav {
  border-top: 1px solid #e0e0e0;
  height: 100px;
  width: 100%;
  background: white;
  a{
    display: inline-block;
    height: 100px;
    line-height: 100px;
    text-decoration: none;
    color: #000;
    font-size: 28px;
  }
  .load{
    margin: 0 40px;
  }
  .line {
    color: #e0e0e0;
    height: 40px;
    font-size: 28px;

  }
  .registe{
    margin: 0 40px;

  }
  .top{
    float: right;
    margin-right: 40px;
    span {
      display: inline-block;
      font-size: 32px;
    }
  }
}
.copy{
    width: 100%;
     background-color: #eee;
    color: #666;
    font-size: 28px;
    height: 80px;
    text-align: center;
    line-height: 60px;
    padding-top: 20px;
}

</style>
