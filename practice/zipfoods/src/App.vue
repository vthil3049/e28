<template>
  <div id="app">
    <p>
      <img alt="logo" id="logo" src="./assets/images/zipfoods-logo.png" />
      <br />ZipFoods is your one-stop-shop for convenient online grocery shopping in
      the greater Boston area.
    </p>
    <show-featured :category='"snacks"' :products='products'></show-featured>
    <show-products :products='products'></show-products>
  </div>
</template>

<script>
import ShowProducts from "./components/ShowProducts.vue";
import ShowFeatured from "./components/ShowFeatured.vue";
import {products} from './products.js';
export default {
  name: "App",
  components: {
    "show-products": ShowProducts,
    "show-featured": ShowFeatured
    },
    data: function(){
      return {
        products: products
      };
    }
  }
  </script>

  <style lang='scss'>
  @import "./styles/zipfoods.scss";
  </style>
