<template>
    <div>
        <home-main-c :banners="infos.banners" />
        <tuijian :tuijians="infos.tuijians" @handleClick="handleClick" />
        <new-soons :newSoos="infos.newSoons" @playMusic="playMusic" />
        <music-play :musicUrl="musicUrl" />
    </div>
</template>

<script>
import HomeMainC from './HomeMainC.vue'
import {getBanners,getTuijians,getNewSoons} from 'network/home/sex'
import {getMusicUrl,getMusicWord} from 'network/musicList/music'

import Tuijian from './Tuijian'
import NewSoons from './NewSoons.vue'
import MusicPlay from '../musicDetail/musicChild/MusicPlay.vue'
    export default {
  components: { HomeMainC, Tuijian, NewSoons, MusicPlay },
        name:'HomePerson',
        data(){
            return {
                infos:{
                    banners:[],
                    tuijins:[],
                    newSoons:[]
                },
                musicUrl:[]

            }
        },
    created(){
            //获取首页banner图
            this.getBanners()
            //获取推荐歌单
            this.getTuijians()
            //获取新音乐
            this.getNewSoons()

    },
    methods: {
        getBanners(){
            getBanners().then(res=>{
                this.$set(this.infos,'banners',res.data.banners)
            })
        },
        //获取推荐歌单
        getTuijians(){
            getTuijians(12).then(res=>{
                this.$set(this.infos,'tuijians',res.data.result)
            })
        },
        //获取新音乐
        getNewSoons(){
            getNewSoons().then(res=>{
                this.infos.newSoons = res.data.result
            })
        },
        //监听推荐的事件
        handleClick(id){
            this.$router.push('/home/musicDetail/'+id)
        },
        //首页播放
        // playMusic(infos){
        //     getMusicUrl(infos.id).then(res=>{
        //             infos.info.src = res.data.data[0].url
        //             getMusicWord(infos.id).then(res=>{
        //                 infos.info.lrc = res.data.lrc.lyric
        //                 this.musicUrl.unshift(infos.info)
        //             })
        //         })
        // },
        //首页播放，async+await改造
        async playMusic(infos){
            try{
                const res = await getMusicUrl(infos.id);
                infos.info.src = res.data.data[0].url;
                const resWord = await getMusicWord(infos.id);
                console.log(resWord)
                infos.info.lrc = resWord.data.lrc.lyric;
                this.musicUrl.unshift(infos.info)
            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>