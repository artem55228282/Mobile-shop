<template>
    <div class="cart">
        <div class="cart__empty" v-if="!this.$store.state.cart.phones.length > 0">
            <h2>Корзина пуста</h2>
            <p>
                Вероятней всего, вы не заказывали ещё телефон.
                Для того, чтобы заказать телефон, перейдите на главную страницу.        
            </p>
            <img 
                src="../assets/cart.png"
                alt="no-image"
            />
            <button class="btn btn__cart" @click="$router.push('/home')">Вернутся назад</button>
        </div>
        <div v-else class="cart__orders">
            <h2>Ваши заказы</h2>
            <div class="orders">
                <div class="order" v-for="cartItem in cartItems" :key="cartItem.id">
                    <img :src="cartItem.imageUrl" :alt="cartItem.name" />
                    <div class="order-name">
                        <strong>Название продукта: </strong> 
                        <div>{{cartItem.name}}</div>
                    </div>
                    <div class="order-price">
                        <strong>Цена: </strong>{{cartItem.price}}$
                    </div>
                    <div class="counter">
                        <button @click="decrement(cartItem.id)">-</button> 
                            {{cartItem.count}}
                        <button @click="increment(cartItem.id)">+</button> 
                    </div>
                    <button class="btn btn__delete" @click="removeItem(cartItem.id)">удалить</button>
                </div>
            </div>
            <p :style="{textAlign: 'center', padding: '10px'}">
                Чтобы заказать продукт надо пройти
                <router-link :to="{name: 'auth'}">регистрацию</router-link>
            </p>
            <button 
                class="btn btn__cart" 
                @click="orderProducts"
                :disabled="!isAuthenticated"
            >
                Заказать
            </button>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: "CartPage",
    data(){
        return{ 
            isRemove: false
        }
    },
    computed: {
        ...mapGetters({
            cartItems:'cart/getCartItems',
            isAuthenticated: 'auth/isAuthenticated'
        })
    },
    methods: {
        increment(id){
            this.$store.dispatch('cart/incrementItemCount', id)
        },
        decrement(id){
            this.$store.dispatch('cart/decrementItemCount', id)
        },
        removeItem(id){
            if(window.confirm('Точно хотите удалить ?')){
                this.$store.dispatch('cart/removeItem', id)
            }
        },
        orderProducts(){
            console.log(this.cartItems);
        }
    },
}
</script>

<style scoped>
    .cart{
        padding-right: 8px;
    }
    .cart__empty{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 50px;
        width: 500px;
        margin: 0 auto;
        text-align: center;
    }
    .cart__empty p {
        color: rgb(119, 119, 119);
        padding: 5px;
    }
    .cart__empty img{
        width: 300px;
        height: 300px;
        object-fit: contain;
        margin: 0 auto;
    }
    .btn__cart{
        transition: all 300ms linear;
        height: 50px;
        width: 200px;
        margin: 0 auto;
        border: 1px solid orange;
        background-color: transparent;;
        color: orange;
        font-weight: bold;
        transition: all 300ms linear ease-in;
        cursor: pointer;
    }
    .btn__cart:hover{
        background-color: orange;
        color: #000;
        box-shadow: 0 0 3px orange;
    }
    button:disabled{
        background-color: #ccc;
        border: none;
        cursor: not-allowed;
        /* pointer-events: none; */
        color: #fff;
    }
    button:disabled:hover{
        color: #fff;
        background: #ccc;
        box-shadow: none;
    }
    .cart__orders{
        border: 1px solid #ccc;
        padding: 20px;
        min-height: calc(100vh - 175px);
        display: flex;
        flex-direction: column;
    }
    .orders{
        overflow-y: auto;
        flex: 1 1 auto;
    }
    .order{
        margin-top: 10px;
        border: 1px solid #ccc;
        max-height: 80px;
        padding: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .order img {
        height: 75px;
        width: 75px;
        margin-right: 10px;
        object-fit: contain;
    }
    .order-name{
        width: 200px;
        overflow-x: auto;
    }
    .order-price{
        width: 100px;
    }
    .counter{
        display: flex;
        align-items: center;
    }
    .counter button{
        border-radius: 50%;
        width: 25px;
        background-color: transparent;
        border: 1px solid #ccc;
        margin: 10px;
        cursor: pointer;
        font-size: 18px;
        color: #ccc;
        transition: all 300ms linear;
    }
    .counter button:hover{
        background-color: #ccc;
        color: #fff;
        border-color: #ccc;
        box-shadow: 0 0 3px #ccc;
    }
    .btn__delete{
        border-color: rgb(161, 0, 0);
        color: rgb(161, 0, 0);
        padding: 5px 15px;
        font-weight: bold;

    }
    .btn__delete:hover{
        background-color: rgb(161, 0, 0);
        color: #fff;
    }
</style>