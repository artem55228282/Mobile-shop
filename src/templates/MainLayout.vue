<template>
    <div>
        <my-header/>
        <hr>
        <router-view/>
    </div>
</template>
<script>
import MyHeader from '../components/MyHeader.vue'
export default {
  components: { MyHeader },
    name: "MainLayout"
}
</script>
<style>
    body{
        background: rgb(253, 253, 253);
    }
</style>