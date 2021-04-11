<template>
    <div class="content">
        <music-detail-top :descs="descs" />
            <music-list :musicList="musicList" @playMusic="getMusicUrl"/>
        <music-play  :musicUrl="musicUrl" ref="player" />
    </div>
</template>

<script>
import {getMusicDetail,getMusicDetailD,getMusicUrl,getMusicList,getMusicWord} from 'network/musicList/music'
import MusicDetailTop from './MusicDetailTop.vue';
import MusicList from './musicChild/MusicList.vue';
import MusicPlay from './musicChild/MusicPlay.vue';
import Scroll from '../../components/Scroll.vue';

    export default {
  components: { MusicDetailTop, MusicList, MusicPlay, Scroll },
        name:'MusicDetail',
        data(){
            return{
                id:0,
                descs:{
                    info:{},
                    data:{}
                },
                musicUrl:[],
                tracks:{},
                musicList:[]
            }
        },
        created(){
            this.id = this.$route.params.id;
            this.getMusicDetail(this.id)
            this.getMusicDetailD(this.id)
        },
        mounted(){
            
        },
        methods: {
            //获取歌单详情
            getMusicDetail(id){
                getMusicDetail(id).then(res=>{
                    let  {coverImgUrl,description,name,id,tags,trackIds} = res.data.playlist
                    console.log(coverImgUrl)
                    this.$set(this.descs.info,'coverImgUrl',coverImgUrl)
                    this.$set(this.descs.info,'description',description)
                    this.$set(this.descs.info,'name',name)
                    this.$set(this.descs.info,'id',id)
                    this.$set(this.descs.info,'tags',tags)
                    console.log(trackIds)
                    for(let k of trackIds){
                        console.log(k.id)
                        this.getMusicList(k.id)
                    }
                })
            },
            getMusicDetailD(id){
                getMusicDetailD(id).then(res=>{
                    this.$set(this.descs,'data',res.data)
                })
            },
            //获取音乐描述，名字，作者等
            getMusicList(ids){
                getMusicList(ids).then(res=>{
                    console.log(res.data)
                    this.musicList.push(res.data)
                })
            },
            //获取歌词
            
            //获取音乐链接
            getMusicUrl(musicId){
                getMusicUrl(musicId.id).then(res=>{
                    console.log(res)
                    // this.musicUrl = res.data.data[0].url
                    // this.$set(musicId.info,'src',this.musicUrl)
                    console.log("lianjiejiejei"+res.data.data[0].url)
                    musicId.info.src = res.data.data[0].url
                    getMusicWord(musicId.id).then(res=>{
                    musicId.info.lrc = res.data.lrc.lyric
                    this.musicUrl.unshift(musicId.info)
                })
                    console.log(this.musicUrl)
                })
            }
            
        },
    }
</script>

<style lang="scss" scoped>

</style>