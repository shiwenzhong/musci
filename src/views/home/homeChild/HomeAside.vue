<template>
    <div class="wrapper">
        <el-menu :default-active="activeIndex" active-text-color="rgb(216, 86, 86)" class="el-menu-demo" mode="vertical">
            <el-menu-item  v-for="(item,index) in list" :key="index" :index="index.toString()">{{item}}</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name:'HomeAside',
        data(){
            return{
                list:['视频','朋友','直播','私人FM','我的音乐'],
                activeIndex:'0'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>