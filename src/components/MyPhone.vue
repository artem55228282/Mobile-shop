<template>
    <div class="card__wrapper">
        <div class="card">
            <div class="card__img">
                <img 
                    :src= "phone.imageUrl"
                    :alt="phone.name"
                />
            </div>

            <div class="cart__title">
                <h3>{{phone.name}}</h3>
                <p class="card__price">Цена: <strong>{{phone.price}}$</strong></p>
            </div>
            
            <div class="flex">
                <button class="btn btn__info" @click="$router.push({name: 'phones', params: {id: phone.id}})">Подробно</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MyCard',
    props: ["phone"],
    data(){
        return{
            aviableColors: ['черный', 'серый', 'белый'],
            selectedColor: this.phone.colors[0],
        }
    },
    methods: {
        changeColor(color){
            this.selectedColor = color
        },
        addToCart(){
            const phone = {
                id: this.phone.id,
                color: this.selectedColor,
                name: this.phone.name,
                price: this.phone.price,
            }
            
            this.$store.dispatch('cart/pushToCart', phone)
        }
    }
}
</script>
<style scoped>
    .card__wrapper{
        width: 33.3%;
    }
    .card{
        margin: 20px;
        box-shadow: 0 0 3px #ccc;
        padding: 25px;
        display: flex;
        flex-direction: column;
    }
    .card__img{
        width: 200px;
        height: 200px;
        margin: 0 auto;
    }
    .card__img img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .cart__title{
        margin-top: 10px;;
        flex: 1 1 auto;
    }
   
    .btn__info{
        align-self: flex-end;
        font-weight: 400;
        margin-top: 12px;
        border-color: rgb(40, 7, 92);
        color: rgb(40, 7, 92);
        padding: 10px 15px;
    }

    .btn__info:hover{
        background-color: rgb(40, 7, 92);
        color: #fff;
        border-color: rgb(40, 7, 92);
        box-shadow: 0 0 3px rgb(40, 7, 92);
    }
    
</style>