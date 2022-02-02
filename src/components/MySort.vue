<template>
    <select v-model="sortType" @change="changeSortType">
        <option disabled value="">
            Выберите один из вариантов
        </option>
        <option v-for="sort in sorts" :key="sort.value" :value="sort.value">
            {{sort.name}}
        </option>
    </select>
</template>
<script>
export default {
    name: "MySort",
    data(){
        return{
            sorts: [
                {
                    value: "all",
                    name: "Все"
                },
                {
                    value: "price",
                    name:  "По цене"
                },
                {
                    value: "alphabet",
                    name: "По алфавиту"
                }
            ],
            sortType: ''
        }
    },
    methods: {
        changeSortType(){
            this.$store.dispatch('phonesObj/setSortType', this.sortType)
            //  this.$store.dispatch('phonesObj/fetchPhones', this.sortType)   
        }
    }
}
</script>
<style scoped >
    select{
        border: none;
        outline: none;
        padding: 10px;
        font-size: 15px;
    }
    select option{
        padding: 10px;
    }
</style>