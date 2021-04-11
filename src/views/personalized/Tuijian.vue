<template>
    <div class="c">
        <div class="wrapper">
            <h4 class="wrapper__title">热门推荐</h4>
            <div class="wrapper__content">
                <div class="wrapper__content__item" v-for="(item,index) in tuijians" :key="index"
                 @mouseover="enter(index)" @mouseout="out" @click="handleClick(item.id)">
                    <img :src="item.picUrl" alt="">
                    <p class="wrapper__content__item__desc">{{item.name}}</p>
                    <p class="wrapper__content__item__count"><i class="el-icon-service"></i>{{item.playCount}}</p>
                    <p :class="{'wrapper__content__item__player':true,'active':currendIndex==index}"><i class="el-icon-video-play"></i></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name:"Tuijian",
        data(){
            return {
                currendIndex:null
            }
        },
        props:{
            tuijians:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods: {
            enter(index){
                this.currendIndex = index
            },
            out(){
                this.currendIndex = null
            },
            handleClick(id){
                this.$emit("handleClick",id)
            }
        },
       
    }
</script>

<style lang="scss" scoped>
@import 'assets/contentColor.scss';
.wrapper{
    &__title{
        font-size: 20px;
        margin-top: 20px;
        margin-left: 20px;
    }
    &__content{
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        justify-content: center;
        border-top: 2px solid $color;
        &__item{
            position: relative;
            width: 250px;
            margin: 20px;
            img{
                width: 100%;
            }
            &__desc{
                font-size: 16px;
            }
            &__count{
                position: absolute;
                top: 0;
                right: 0;
                font-size: 14px;
                color: #fff;
            }
            &__player{
                position: absolute;
                right: 20px;
                font-size: 30px;
                color: red;
                opacity: 0;
                top: 150px;
                transition: all 1s;
            }
            .active{
                opacity: 1;
            }
        }
    }
}
</style>