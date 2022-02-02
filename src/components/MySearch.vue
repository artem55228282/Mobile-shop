<template>
    <input 
      v-model="value"
      class="search-input"
      placeholder="Search products"
      @change="onChange" 
    />
</template>
<script>
export default {
  props: ['search'],
  data(){
    return{
      value: this.search
    }
  },
  methods:{
    onChange(){
      this.$emit('onChange', this.value)
    }
  }
}
</script>
<style>
    
</style>