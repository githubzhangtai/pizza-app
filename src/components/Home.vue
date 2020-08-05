<template>
  <div>
    <h1>home</h1>
    <button @click="goToMenu" class="btn btn-success">Let's order!</button>
  </div>
</template>

<script>
    export default {
        name: "Home",
        methods:{
          goToMenu(){
            // 跳转到上一次得浏览
            // this.$router.go(-1);

            // 指定跳转地址
            // this.$router.replace("/menu")

            // 跳转到指定路由名字下
            // this.$router.replace({name:'menuLink'})

            // 通过push进行跳转
            // this.$router.push("/menu")
            this.$router.push({name:'menuLink'})
          }
        }
    }
</script>

<style scoped>

</style>
