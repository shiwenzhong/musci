<template>
    <div class="play">
        <audio autoplay :src="musicUrl" duration ref="music"></audio>
        <!-- <i class="el-icon-video-play playIcon" v-show="current==1" @click="isPlay(1)"></i>
        <i class="el-icon-video-pause playIcon" v-show="current==2" @click="isPlay(2)"></i> -->
        <aplayer  :autoplay="autoplay" repeat="repeat-all" :showLrc="true" :float="true" v-if="isShow" :music="musicUrl[0]" :list="musicUrl" ></aplayer>
    </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
    export default {
        name:'MusicPlayer',
        props:{
            musicUrl:{
                type:Array
            }
        },
        components:{
            Aplayer
        },
        data(){
            return{
                current:0,
                isShow:false,
                autoplay:true
            }
        },
        updated(){
            console.log(this.musicUrl)
            console.log(this.musicUrl.length)
            if(this.musicUrl.length!==0){
                this.isShow=true
                console.log(this.isShow)
            }
        },
        methods: {
            isPlay(value){
                if(value===1){
                    this.$refs.music.play()
                    console.log(this.$refs.music.duration)
                    this.current = 2
                }else{
                    this.$refs.music.pause()
                    this.current = 1
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
.play{
    height: 100px;
    width: 50%;
    // background-color: rgb(216, 86, 86);
    position: fixed;
    bottom: 10px;
}
</style>