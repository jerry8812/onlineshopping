<template>
  <div class="products">
    <product-list-item v-for="(product,index) in productList" 
                       :key="index"
                       :productItem="product"/>
  </div>
</template>

<script>
import ProductListItem from './ProductListItem.vue'

  export default {
    components: { ProductListItem },
    name: 'ProductList',
    props: {
      productList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style>
  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 55px;
  }
</style>