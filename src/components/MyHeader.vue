<template>
    <div class="flex">
        <router-link class="logo" :to="{name: 'home'}">
            <h1>
                Mobile <span>Store</span>
            </h1>
      </router-link>
    <div class="flex">
        <div v-if="this.token">
            <button class="btn btn__logout" @click="logOut">Logout</button>
        </div>
        <div v-else>
            <button class="btn btn__login" @click="logIn">Sign In</button>
        </div>
        <my-cart />
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MyCart from "./MyCart.vue"

export default {
    components: {MyCart},
    computed:{
        ...mapGetters({
            token: 'auth/getToken'
        }),
    },
    methods: {
        logOut(){
            this.$store.dispatch('auth/logOut')
            // this.$router.push({name: 'cart'})
        },
        logIn(){
            this.$router.push({name: "auth"})
        }
    }
}
</script>

<style scoped>
    .flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0;
    }
    .logo{
        text-decoration: none;
        color: orange;
        cursor: pointer;
    }
    .logo span{
        border-radius: 50px 0 50px 0;
        background-color: #000;
        padding: 10px;
    }
    .btn{
        border: 1px solid #ccc;
        margin-right: 10px;
        padding: 10px;
        border-radius: none ;
    }
</style>