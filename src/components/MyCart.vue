<template >
    <router-link :to="{name: 'cart'}" class="cart">
        Корзина 
        <strong>
            {{ $store.getters['cart/getCartTotalPrice']}} $
        </strong>
        /
        <strong>
            {{ $store.getters['cart/getCartTotalCount']}} 
        </strong>
    </router-link>
</template>
<script>
export default {
    name: 'MyCart',
}
</script>
<style scoped>
    .cart{
        text-decoration: none;
        cursor: pointer;
        border: 1px solid orange;
        color: orange;
        padding: 10px 15px;
        font-weight: bold;
    }
    .cart:hover{
        background-color: orange;
        color: #000;
        transition: all 300ms ease;
        box-shadow: 0 0 5px orange;
    }
</style>