<template>
    <div>
        <el-container>
            <el-header>
                <home-top class="top" />
            </el-header>
                <el-main>
                    <home-main @handleClick="handleClick" />
                    <router-view />
                </el-main>
        </el-container>
    </div>
</template>

<script>
import HomeMain from './homeChild/HomeMain.vue'
import HomeTop from './homeChild/HomeTop.vue'
export default {
  components: { HomeTop, HomeMain},
        name:'Home',
        methods: {
            handleClick(path){
                this.$router.push(`${path}`)
            }
        },
    }
</script>

<style lang="scss" scoped>
*{
    padding: 0;
}
.el-aside{
    border-right: 1px solid #eee;
    height: 100%;
}
.swi{
    margin-top: 10px;
}

</style>