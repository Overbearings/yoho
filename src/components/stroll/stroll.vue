<template>
    <div class="strot">
        <ul>
            <router-link to="/stroll/strollNew" tag="li">最新</router-link>
            <router-link to="/stroll/strollCct" tag="li">搭配</router-link>
            <router-link to="/stroll/strollTop" tag="li">头条</router-link>
            <router-link to="/stroll/strollUp" tag="li">上新</router-link>
            <router-link to="/stroll/strollInfor" tag="li">资讯</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="less">
.strot{
    width: 100%;
    ul{
        width: 100%;
        display: flex;
        list-style-type: none;
        background: white;
        li{
            width: 16%;
            margin: 0 4%;
            height: 92px;
            display: inline-block;
            color: #cccccc;
            line-height: 92px;
            text-align: center;
            font-size: 24px;
        }
        .router-link-active{
            color: #444444;
            border-bottom: 6px solid #444444;
        }
    }
}
</style>
