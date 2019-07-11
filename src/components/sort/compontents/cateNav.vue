<template>
    <div class="search">

        <div>
            <img src="../imgs/search.png" alt="">
            <input type="text" placeholder="搜索商品">
        </div>

    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    .search{
        width: 100%;
        height: 120px;
        background: #F8F8F8;
        display: flex;
        box-sizing: border-box;
        padding: 0 20px;
        justify-content: space-between;/* 两边对齐 */
        align-items: center;
    }
    .search .img1{
        width: 52px;
        height: 52px;
    }

    .search div{
        flex: 1;
        background: #FFFFFF;
        height: 60px;
        border-radius: 32px;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        margin: 0 16px;
    }
    .search div img{
        width: 32px;
        margin-left: 20px;
    }
    .search div input{
        border: none;
        margin-left: 20px;
        flex: 1;
        height: 44px;
        background: transparent;
        font-size:28px;

    }
</style>
