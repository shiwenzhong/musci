<template>
<div>
    <div class="wrapper">
        <img :src="descs.info.coverImgUrl" class="wrapper__img">
        <div class="wrapper__right">
            <h4 class="wrapper__right__title">{{descs.info.name}}</h4>
            <div class="wrapper__right__btn">
                <el-button type="danger" round  icon="el-icon-video-play">播放全部</el-button>
                <el-button type="primary" round icon="el-icon-star-off">收藏{{descs.data.bookedCount}}</el-button>
                <el-button type="primary" round icon="el-icon-share">分享{{descs.data.shareCount}}</el-button>
            </div>
            <p class="wrapper__right__tags">标签:<span v-for="(item,index) in descs.info.tags" :key="index">{{item}}/</span></p>
            <p class="wrapper__right__play"><span>歌曲：{{descs.data.commentCount}} </span><span>播放：{{descs.data.playCount|change}}</span></p>
            <p class="wrapper__right__desc">简介:{{descs.info.description}}</p>
        </div>
    </div>
    <el-menu :default-active="activeIndex" active-text-color="rgb(216, 86, 86)" class="el-menu-demo" mode="horizontal">
        <el-menu-item :index="index.toString()" v-for="(item,index) in lists" :key="index" >{{item.name}}</el-menu-item>
    </el-menu>
</div>
</template>

<script>
    export default {
        name:'MusicDetailTop',
        data(){
            return {
                activeIndex:'0',
                lists:[{
                    path:'/musicList',
                    name:'歌曲列表'
                }]
            }
        },
        props:{
            descs:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        created() {
            console.log(this.descs)
            // console.log(111)
            // this.$router.push('/home/musicDetail/musicList')
        },
        filters:{
            change(value){
                return (value/10000).toFixed(0)+'万'
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrapper{
    display: flex;
    padding: 20px;
    &__img{
        width: 200px;
        border-radius: 10px;
    }
    &__right{
        margin-left: 20px;
        &__title{
            font-size: 20px;
            line-height: 40px;
        }
        &__tags{
            font-size: 14px;
            padding: 20px 10px 10px;
        }
        &__play{
            font-size: 14px;
            padding: 20px 10px 10px;
        }
        &__desc{
            font-size: 14px;
            padding: 20px 10px 10px;
        }
    }
}
</style>