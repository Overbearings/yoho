<template>
    <div class="search">
        <router-link to="/shou">
            <img src="../imgs/fenlei.png" alt="">
        </router-link>

        <div class="logo">
            <img src="../imgs/yohobuy_h.png" alt="">
        </div>
        <router-link to="/search">
        <img src="../imgs/sousuo.png" alt="">
        </router-link>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    .search{
        width: 100%;
        height: 100px;
        display: flex;
        box-sizing: border-box;
        padding: 0 20px;
        justify-content: space-between;
        align-items: center;
        background: #7AD9F9;
    }
    .search img{
        width: 48px;
        height: 48px;
    }
    .search .logo{
        width: 400px;
        height: 100px;
    }
    .search .logo img{
        width: 400px;
        height: 100px;
        align-items: center;
    }
</style>
