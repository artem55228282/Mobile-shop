<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
import MainLayout from './templates/MainLayout.vue'
import EmptyLayout from './templates/EmptyLayout.vue'
import Cookies from 'js-cookie'
export default {
  name: 'app',
  components: {
    MainLayout,
    EmptyLayout
  },
  data(){
    return {
    
    }
  },
  computed:{
    layout(){
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  created(){
    const token = JSON.parse(Cookies.get('token'))
    if(!token){
      this.$router.push({name: "auth"})
    }else{
      this.$store.dispatch('auth/logIn', token.auth)
      this.$router.push({name: "home"})
    }
    this.$store.dispatch('phonesObj/fetchPhones')
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600&display=swap');
  *{
    font-family: Montserrat ;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  p, a, button{
    font-weight: 400 !important;
    font-size: 14px;
  }

  ::-webkit-scrollbar {
    width: 8px; /* ширина для вертикального скролла */
    height: 10px; /* высота для горизонтального скролла */
    background-color: #000;
  }

  /* ползунок скроллбара */
  ::-webkit-scrollbar-thumb {
    border-radius: 9em;
    box-shadow: inset 1px 1px 10px #f3faf7;
    background-color: rgb(78, 78, 78);
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgb(51, 50, 50)
  }

  #app{
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .flex{
    display: flex;
    align-items: center;
    list-style-type: none;
    justify-content: space-between;
    padding: 0;
  }
  button{
    text-transform: uppercase;
  }
</style>
