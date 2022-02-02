<template>
    <div>
        <ul  class="categories">
            <li 
                :class="(selectedCategory === null) ? 'active' : ''"
                @click="changeCategory(null)"
            >
                Все
            </li>
            <li 
                :class="(index + 1 === selectedCategory) ? 'active' : '' "
                v-for="(category, index) in categories"
                :key="index"
                :category="category"
                @click='changeCategory(index + 1)'
            >
                {{category}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MyCategories",
        props: {
            categories: {
                type: Array,
                required: true
            },
        },
        data(){
            return{
                selectedCategory: 0
            }
        },
        methods: {
            changeCategory(id){
                this.$store.dispatch('phonesObj/setCategory', id)   
                // this.$store.dispatch('phonesObj/fetchPhones', id)   
                this.selectedCategory = id         
            }
        },
        created(){
            this.selectedCategory = this.$store.getters['phonesObj/getCategory']
        }
    }
</script>

<style scoped>
    .categories{
        padding: 0;
        display: flex;
        width: 500px;
        list-style-type: none;
    }
    .categories li {
        border: 1px solid #ccc;
        padding: 10px;
        cursor: pointer;
        width: 100px;
    }

    .active{
        background-color:rgb(61, 61, 61);
        box-shadow: 0 0 4px rgb(61, 61, 61);
        border-color: rgb(61, 61, 61) !important;
        color: rgb(253, 253, 253);
        font-weight: bold;
    }
</style>