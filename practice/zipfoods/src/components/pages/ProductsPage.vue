<!-- src/components/ShowProducts.vue -->
<template>
  <div id="products">
    <h2>Products</h2>
    <show-product :products='products' v-for="product in products" :key="product.id" :product="product"></show-product>
  </div>
</template>
<script>
import ShowProduct from "../ShowProduct.vue";

// import {products} from './../../products.js';
//import * as app from '@/common/app.js';

export default {
  name: "",
  components: {
    "show-product": ShowProduct
  },
  props: [],
  data: function() {
    return {
    //products: []
   }
  },
  mounted: function() {
    // app.api.all('products').then(response => {
    //     this.products = response;
    //});
  },
  computed: {
    products: function() {
        return this.$store.state.products;
    }
}
};
</script>
<style scoped></style>
