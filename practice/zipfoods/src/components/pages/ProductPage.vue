<template>
  <div id='product-page'  v-if='product'>
    <h1>Product {{  product.name }}</h1>
    <button @click='addToCart(slug)'>Add to cart</button>
    <img class='product-thumb' :alt='"Product image of  " + product.name' :src='imageSrc' />

    <p class='description'>{{ product.description }}</p>
    <div class='price'>${{ product.price }}</div>


    <transition name='fade'>
      <div class='alert' v-if='addAlert'>Your cart has been updated!</div>
    </transition>

    <router-link :to='{ name: "products" }'>&larr; Return to all products</router-link>
  </div>
</template>

<script>
import * as app from '@/common/app.js';
// const axios=require('axios');
export default {
  name: 'ProductPage',
  props: ['slug'],
  data: function() {
    return {
      // id: this.$route.params.id
      product: null,
      addAlert: false
    };
  },
  mounted: function() {
    // Load product details from Firestore
    app.api.find('products', 'slug', this.slug).then(response => {
      this.product = response;
    });
  },

  computed: {
    imageSrc: function() {
      try {
        return require('@/assets/images/products/' +
        this.product.slug +
        '.jpg');
      } catch (e) {
        return require('@/assets/images/products/image-not-available.jpg');
      }
    }
  },
  methods: {
    addToCart: function(slug) {
      let cart = new app.Cart();
      cart.add(slug);
      app.store.cartCount = cart.count();
      this.addAlert = true;
      setTimeout(() => (this.addAlert = false), 3000);
    }
  }
};
</script>
<style  lang='scss' scoped>

img {
  width: 200px;
  border: 1px solid black;
  margin-bottom: 10px;
}
.description {
  font-size: 2rem;
  width: 75%;
  margin: 10px auto;
}
.price {
  font-size: 3rem;
  margin: 10px auto;
}
button {
  display: block;
  margin: 10px auto;
  font-size: 2rem;
}
</style>
