<template>

        <div class="wrapper" ref="wrap">
            <div class="content">
                <slot></slot>
            </div>
        </div>
</template>

<script>
import BScroll from '@better-scroll/core'

    export default {
        name:'Scroll',
        data(){
            return{
                scroll:null
            }
        },
        mounted(){
            console.log("llwrap"+this.$refs.wrap)
            this.scroll = new  BScroll(this.$refs.wrap,{
                click:true
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>