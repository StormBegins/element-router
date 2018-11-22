<template>
    <div id="app">
        <div style="border: 1px solid red">
            <router-view/>
        </div>
        <button @click="goback">返回上一页</button>

    </div>
</template>

<script>
 export default {
     mounted() {
         this.$router.push('/login')
     },
     methods: {
         goback() {
             console.log(this.$router);
             this.$router.go(3);
         }
     }
 }
</script>
