<template>
    <div id="botnav">
        <ul class="nav">
            <router-link tag="li" to="/home">
                <i class="iconfont icon-shouye"></i>
                <span>首页</span>
            </router-link>
            <router-link tag="li" to="/sort">
                <i class="iconfont icon-yixianshi"></i>
                <span>分类</span>
            </router-link>
            <router-link tag="li" to="/stroll">
                <i class="iconfont icon-huojianxianxing"></i>
                <span>逛逛</span>
            </router-link>
            <router-link tag="li" to="/mycart">
                <i class="iconfont icon-shopshoppingco"></i>
                <span>购物车</span>
            </router-link>
            <router-link tag="li" to="/mine">
                <i class="iconfont icon-wode"></i>
                <span>我的</span>
            </router-link>
        </ul>
    </div>
</template>
<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    i {
        /* font-style: normal; */
        font-size: 36px;
    }
    .nav{
        z-index: 9999;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-around;
        background: white;
        border-top: 2px solid #e0e0e0;
    }
    .nav li {
        display: flex;
        flex-direction: column;
    }
    .nav li i {
        text-align: center;
        font-size: 44px;
        margin-top: 12px;
    }
    .router-link-active{
        color: #7ad9f9;
    }
    .nav li span{
        font-size: 24px;
    }
</style>
