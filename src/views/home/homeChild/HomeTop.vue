<template>
    <div class="wrapper">
        <h1 class="el-icon-apple wrapper__title">网易云音乐</h1>
        <el-input size="mini"
            placeholder="请输入内容"
            v-model="music" class="wrapper__input">
            <i slot="prefix" class="el-input__icon el-icon-search wrapper__icon"></i>
        </el-input>
        <div class="wrapper__btn">
            <el-avatar icon="el-icon-user-solid"></el-avatar>
            <span>登录</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HomeTop',
        data(){
            return {
                music:""
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrapper{
    display: flex;
    background-color: rgb(216, 86, 86);
    height: 50px;
    color: #fff;
    line-height: 50px;
    width: 100%;
    &__title{
        line-height: 50px;
        flex: 1;
        padding-left: 20px;
        box-sizing: border-box;
    }
    &__input{
        width: 200px;
    }
    &__icon{
        height: 30px;
    }
    &__btn{
        flex: 1;
        text-align: right;
        padding-right: 20px;
        .el-avatar{
            margin-top: 5px;
        }
        span{
            margin-bottom: -10px;
            margin-left: 10px;
        }
    }
}
</style>