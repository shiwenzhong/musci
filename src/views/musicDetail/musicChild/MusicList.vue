<template>
    <el-table
      :data="musicList"
      :stripe="show"
      height="462px"
      @row-click="handleClick"
      style="width: 100%">
      <el-table-column
        prop="songs[0].name"
        label="音乐标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="songs[0].ar[0].name"
        label="歌手"
        width="180">
      </el-table-column>
      <el-table-column
        prop="songs[0].al.name"
        label="专辑">
      </el-table-column>
      <el-table-column
        prop="songs[0].h.size"
        label="时长">
      </el-table-column>
    </el-table>
</template>

<script>
import {getMusicList} from 'network/musicList/music'

    export default {
        name:'MusicList',
        data(){
            return {
                // musicList:[],
                show:true,
                // ids:[]
            }
        },
        props:{
            musicList:{
                type:Array
            }
        },
        created(){
            console.log(this.musicList)
        },
        // created(){
        //      console.log("zizujian.....")
            
        //     const musicId = this.$store.state.ids.id
        //     console.log(this.$store.state.ids)
        //     console.log(musicId)
        //     for(let k of musicId){
        //         console.log()
        //         this.getMusicList(k)
        //         console.log("zizujian......")
        //     }

        // },
        methods: {
            getMusicList(ids){
                getMusicList(ids).then(res=>{
                    this.musicList.push(res.data)
                })
            },
            handleClick(val){
                console.log(val)
                const musicInfo = {}
                musicInfo.title = val.songs[0].name
                musicInfo.artist = val.songs[0].ar[0].name
                musicInfo.pic = val.songs[0].al.picUrl
                this.$emit('playMusic',{info:musicInfo,id:val.songs[0].id})
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>