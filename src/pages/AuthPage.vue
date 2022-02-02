<template>
    <div class="auth">
        <div class="form">
           <div class="login" v-if="isLogin">
                <h2>Войти</h2>
                <p v-if="error">{{error}}</p>
                <form @submit.prevent="loginUser">
                    <label for="email">Email пользователя</label>
                    <input 
                        id="email"
                        name="email"
                        placeholder="Email пользователя"
                        type="text"
                        v-model="email"
                    />
                    <label for="password">Пароль</label>
                    <input 
                        id="password"
                        placeholder="Пароль пользователя"
                        type="password"
                        v-model="password"
                    />
                    <p @click="isLogin = !isLogin">Регистрация</p>
                    <button class="btn btn__login">Войти</button>
                </form>
           </div>
           <div class="login" v-else>
                <h2>Регистрация</h2>
                <form @submit.prevent="registerUser">
                    <label for="username">Введите имя пользователя</label>
                    <input 
                        id="username"
                        name="username"
                        placeholder="Имя пользователя"
                        type="text"
                        v-model="username"
                    />
                    <label for="email">Введите email пользователя</label>
                    <input 
                        id="email"
                        name="email"
                        placeholder="Email пользователя"
                        type="email"
                        v-model="email"
                    />
                    <label for="password">Пароль</label>
                    <input 
                        id="password"
                        placeholder="Пароль пользователя"
                        type="password"
                        v-model="password"
                    />
                    <label for="confirm_password">Подвердите пароль</label>
                    <input 
                        id="confirm_password"
                        placeholder="Пароль пользователя"
                        type="password"
                        v-model="password_confirmation"
                    />
                    <p @click="isLogin = !isLogin">Уже зарегистрировались?</p>
                    <button class="btn btn__login">Регистрация</button>
                </form>
           </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            isLogin: true,
            email: "",
            username: "",
            password: "",
            password_confirmation: "",
            error: ""
        }
    },
    methods: {
        async loginUser(){
            const user = {
                email: this.email,
                password: this.password,
                returnSecureToken: true
            }
            try{
                const registerUrl='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBp9z8nyfO4zGTL7u9cd7HF3QeRrB3Og-Q';
                const {data} = await axios.post(registerUrl, user)
                // data => { idToken, ExpiresIn } localstorage ExpiresIn: 3600 
                if(data){
                    this.$store.dispatch('auth/logIn', {token: data.idToken, isAuthenticated: true})
                    this.$router.push({name: "home"})
                }
            }catch(err){
                this.error = err.response.data.error.message.split('_').join(' ')
                console.log(err)
            }
        },
        async registerUser(){
            const data = {
                email: this.email,
                password: this.password,
                returnSecureToken: true
                // username: this.username,
                // password_confirmation: this.password_confirmation,
            }
            try{
                const url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBp9z8nyfO4zGTL7u9cd7HF3QeRrB3Og-Q';
                await axios.post(url, data)
            }catch(err){
                console.log(err.message);
            }
        }
    }
}
</script>
<style scoped >
    h2{
        margin: 10px 0;
    }
    p{
        font-size: 10px;
        cursor: pointer;
        padding-bottom: 10px;
    }
    p:hover{
        opacity: .7;
    }
    .auth{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgb(93, 93, 93);
    }
    .form{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .login form{
        display: flex;
        flex-direction: column;
        width: 350px;
    }
    label{
        font-size: 12px;
    }
    .login form input {
        width: 100%;
        padding: 15px;
        margin: 10px 0;
        border: 1px solid #ccc;
        outline: none;
    }
    .login form input:focus {
        box-shadow: 0 0 3px rgb(146, 219, 146);
        border: 1px solid rgb(146, 219, 146);
    }
    .btn__login{
        width: 100%;
        padding: 15px;
        background-color: transparent;
        border: 1px solid rgb(146, 219, 146);
        color: rgb(146, 219, 146);
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
        transition: all 300ms linear;
    }
    .btn__login:hover{
        background: rgb(146, 219, 146);
        color: #fff;
    }

</style>