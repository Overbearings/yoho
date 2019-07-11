<template>
    <div class="sort">
        <img src="../imgs/zuojiantou.png" alt="">
        <div class="logo">
            <h2>个人中心</h2>
        </div>
        <img src="../imgs/sousuo.png" alt="">
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    .sort{
        width: 100%;
        height: 100px;
        display: flex;
        box-sizing: border-box;
        padding: 0 20px;
        justify-content: space-between;/* 两边对齐 */
        align-items: center;
        background: #000;
    }
    .sort img{
        width: 56px;
        height: 56px;
    }

    .sort .logo{
        widows: 400px;
        height: 100px;
    }

    .sort .logo h2{
        color: white;
        letter-spacing: 0.2em;
        margin-top: 12px;
        line-height: 80px;

    }

</style>
