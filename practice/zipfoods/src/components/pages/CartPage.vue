<template>
  <div id='cart-page' v-if='cart'>
    <h1>Your Cart</h1>

    <div v-if='items.length == 0'>No items</div>
    <ul class='cleanList' v-if='products'>
      <li v-for='item in items' :key='item.slug'>
        {{ item.quantity }} x {{ getProductDetails(item.slug).name }}
        <button @click='removeFromCart(item.slug, item.quantity)'>Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import * as app from '@/common/app.js';

export default {
  data: function() {
    return {
      items: [],
      cart: null,
      //products: null
    };
  },
  mounted() {
    // Another redundant call to the API to get all the product data; we'll address this shortly
    // app.api.all('products').then(response => {
    //   this.products = response;
    // });

    // Making Cart instant a data property so we can use it later in a removeFromCart method
    this.cart = new app.Cart();
    this.items = this.cart.getItems();
  },
  methods: {
    getProductDetails(slug) {
      for (let key of Object.keys(this.products)) {
        if (this.products[key].slug == slug) {
          return this.products[key];
        }
      }
    },
    removeFromCart(slug, quantity) {
      this.cart.remove(slug);
      this.$store.commit('updateCartCount', -quantity);
    }
  },
  computed: {
    products: function() {
      return this.$store.state.products;
    }
  }
};
</script>
