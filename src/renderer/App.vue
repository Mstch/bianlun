<!--suppress ALL -->
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'bianlun'
    }
</script>

<style>
    /* CSS */
    html,
    body {
        height: 100%;
        overflow: hidden;
    }

    body {
        font-size: 1.2rem;
        font-weight: bold;
        padding: 0;
        margin: 0;
        background: url("~@/assets/imgs/background_0.jpg");
        background-size:auto 100%;
        background-position-x:center;
    }

    * {
        font-family: "Microsoft YaHei UI Light", 'Helvetica Neue', Arial, 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif;
        transition: all .2s;
        padding: 0;
        margin: 0;
    / / 禁止文字被鼠标选中 moz-user-select: -moz-none;
        -moz-user-select: none;
        -o-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;

    }

    #app {
        height: 100%;
    }
</style>