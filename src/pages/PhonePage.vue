<template lang="">
    <div>
        <div class="row" v-if="phone">
            <div class="column">
                <div class="column__info">
                    <h2>Смартфон: {{this.phone.name}}</h2>
                    <p class="column__info-text">
                        {{this.phone.info}}
                    </p>
                    <h4 class="column__info-price">Цена продукта: <span>{{this.phone.price}}$</span></h4>
                </div>
                <div class="btns">
                    <p>Выберите цвет смартфона:</p>
                    <ul class="colors">
                        <li 
                            v-for="(color, index) in this.phone.colors" 
                            :key="color"
                            @click="selectColor(index)"
                            :class="(index === selectedColor) ? `btn__${color} btn__active` : `btn__${color}`"
                        >
                            <!-- {{color}} -->
                        </li>
                    </ul>
                    <button 
                        class="btn btn__add disabled" 
                        @click="addToCart"
                    >
                        Добавить
                    </button>
                    <button 
                        class="btn btn__back" 
                        @click="$router.push('/home')"
                    >
                        Назад
                    </button>
                </div>
            </div>
            <img :src="this.phone.imageUrl" :alt="this.phone.name" />
        </div>
        <div v-else>
            <h2 class="notfound">Смартфон по ид: {{this.$route.params.id}} не найден</h2>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "PhonePage",
    data(){
        return{
            phone: {},
            selectedColor: 0,
        }
    },
    methods: {
        selectColor(id){
            this.selectedColor = id
        },
        addToCart(){
            const phone = {
                id: this.phone.id,
                color: this.phone.colors[this.selectedColor],
                name: this.phone.name,
                price: this.phone.price,
                imageUrl: this.phone.imageUrl
            }
            this.$store.dispatch('cart/pushToCart', phone)
        }
    },
    computed: {
        ...mapGetters({
            isAuthenticated: 'auth/isAuthenticated'
        })
    },
    async mounted(){
        this.phone = await this.$store.getters['phonesObj/getPhoneById'](this.$route.params.id)
    }
}
</script>

<style scoped>
    .notfound{
        text-align: center;
        margin: 100px;
    }
    .row{
        display: flex;
        margin: 70px 0;
    }
    .row img{
        height: 500px;
        width: 500px;
        object-fit: contain;
    }
    .column{
        display: flex;
        flex-direction: column;
    }
    .column__info{
        flex: 1 1 auto;
    }
    .column__info-text{
        overflow-y: auto;
        height: 250px;
    }
    .column__info h2{
        margin: 0;
    }
    .column__info-price{
        margin: 0;
    }
    .column__info-price span{
        color: orange;
    }
    .colors{
        margin: 10px 0; 
        display: flex;
        padding: 0;
        list-style-type: none;
    }
    .colors li {
        padding: 15px ;
        text-align: center;
        cursor: pointer;
        transition: all 300m linear;
        font-size: 14px;
        font-weight: bold;
        margin-right: 10px;
        text-transform: uppercase;
        border: 1px solid #ccc;
    }
    .colors li:hover{
        transition: all 300ms linear;
        color: #fff;
        box-shadow: orange;
    }
    .btn__active{
        background-color: orange;
        box-shadow: 0 0 3px 2px orange;
    }
    .btn{
        box-shadow: 0;
    }
    .btn__add{
        width: 300px;
        background-color: #fff;
        color: #20c997;
        border-color:#20c997;
    }
    .btn__add:hover{
        background-color: #20c997;
        box-shadow: 0 0 3px #20c997;
        color: #fff;
    }
    .btn__back{
        width: 300px;
        margin: 0 10px;
    }

    /* phone colors */
    .btn__black{
        background-color: #000;
    }

    .btn__gray{
        background: gray;
    }
    .btn__white{
        background-color: rgb(246, 246, 246);
    }

</style>