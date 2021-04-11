<template>
    <div>
         <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="(item,index) in banners" :key="index">
                    <a :href="item.url">
                    <img :src="item.imageUrl" alt="">
                    </a>
                </el-carousel-item>
            </el-carousel>
    </div>
</template>
<script>
export default {
    name:'HomeMainC',
     props:{
         banners:{
             type:Array,
             default(){
                 return []
             }
         }
     }

}
</script>

<style lang="scss" scoped>
img{
    width: 100%
}
</style>