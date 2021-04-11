<template>
    <div class="wrapper">
        <div class="content">
            <h4 class="content__title">
                最新音乐
            </h4>
            <div class="content__items">
                <div class="item" v-for="(item,index) in newSoos" :key="index" @click="playMusic(item)">
                    <span class="item__num">{{index+1}}</span>
                    <div class="item__icon">
                    <img :src="item.picUrl" alt="" class="item__img">
                    <p class="icon"><i class="el-icon-video-play"></i></p>
                    </div>
                    <div class="item__desc">
                        <p class="item__desc__name">{{item.name}}</p>
                        <p class="item__desc__artistname">{{item.song.artists[0].name}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'NewSoons',
        props:{
            newSoos:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods: {
            playMusic(item){
                console.log("-----")
                const info = {}
                info.title = item.name
                info.artist = item.song.artists[0].name
                info.pic = item.picUrl
                this.$emit('playMusic',{info,id:item.id})
            }
        }
    }
</script>

<style lang="scss" scoped>
@import 'assets/contentColor.scss';

.content{
    &__title{
        font-size: 20px;
        margin-left: 20px;
    }
    &__items{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        border-top: 2px solid $color;
        margin-top: 10px;
        .item{
            width: 50%;
            display: flex;
            margin: 15px 0;
            &__num{
                color: $color;
                font-size: 20px;
                line-height: 80px;
                
            }
            &__img{
                width:80px;
                margin: 0 20px;
            }
            &__desc{
                flex:1;
                &__name{
                    margin-bottom: 30px;
                }
            }
        }
    }
}
.item__icon{
    position: relative;
    .icon{
        position: absolute;
        font-size: 30px;
        top: 50%;
        margin-top: -20px;
        left: 50%;
        margin-left: -15px;
        color: $color;
    }
}
</style>