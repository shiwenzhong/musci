<template>
    <div class="top">
        <div>
            <el-menu :default-active="activeIndex" active-text-color="rgb(216, 86, 86)" class="el-menu-demo" mode="horizontal">
                <el-menu-item  v-for="(item,index) in lists" :key="index" :index="index.toString()" @click="handleClick(item.path)">{{item.name}}</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HomeMain',
        data(){
            return{
                activeIndex:'0',
                lists:[{
                    name:'个性推荐',
                    path:'/homePerson'
                },{
                    name:'歌单',
                    path:'/homePerson'
                },{
                    name:'主播电台',
                    path:'/homePerson'
                },
                {
                    name:'排行榜',
                    path:'/homePerson'
                },
                {
                    name:'歌手',
                    path:'/homePerson'
                },
                {
                    name:'最新音乐',
                    path:'/homePerson'
                }
                ]
                // list:['个性推荐','歌单','主播电台','排行榜','歌手','最新音乐']
            }
        },
        methods: {
            handleClick(path){
                this.$emit('handleClick',path)
            }
        },
    }
</script>

<style lang="scss" scoped>
@import 'assets/contentColor.scss';

// .top{
//     margin-bottom: 20px;
//     padding-left: 500px;
//     padding-bottom: 2px;
//     border-bottom: 2px solid #eee;
// }

.el-menu{
    padding-left: 500px;
    margin-bottom:20px;
}
</style>