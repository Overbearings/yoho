<template>
  <div class="c-content">
      <div class="c-left">
          <ul ref="myul">
            <router-link to="/sort/loading" tag="li">推荐</router-link>
            <router-link to="/sort/loading1" tag="li">上衣</router-link>
            <router-link to="/sort/loading2" tag="li">裤装</router-link>
            <router-link to="/sort/loading3" tag="li">鞋靴</router-link>
            <router-link to="/sort/loading4" tag="li">裙装</router-link>
            <router-link to="/sort/loading5" tag="li">服配</router-link>
            <router-link to="/sort/loading6" tag="li">有玩</router-link>
            <router-link to="/sort/loading7" tag="li">有食</router-link>
            <router-link to="/sort/loading8" tag="li">创意生活</router-link>
          </ul>

      </div>
<router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="less">
.c-content{
    height: calc(100% - 200px);
    overflow: hidden;
    display: flex;
}
.c-left{
    height: 100%;
    width: 160px;
    background: white;

    // overflow-y: auto;
    li{
        width: 160px;
        height: 90px;
        text-align: center;
        line-height: 90px;
        list-style: none;
        text-decoration: none;
        color: black;
    }
}
.router-link-active{
    background: #EFE4FA;
    color: #E87066;
}

</style>
