<template>
  <div id="app">
    <p>
      <img alt="logo" id="logo" src="./assets/images/zipfoods-logo.png" />
      <br />
    </p>
    <nav>
      <ul>
        <li v-for='link in links' :key='link'>
          <router-link :to='{name: link}' exact>{{ link }}<span v-if='link == "cart"'>({{cartCount }})</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import * as app from '@/common/app.js';

export default {
  name: "App",
  components: {

  },
  data: function(){
    return {
      links: ['home', 'products', 'categories', 'add a product', 'admin','cart'],
      // products: products,
      page: 'home',
      // sharedState: app.store
    };
  },
  mounted: function() {
    this.$store.dispatch('setProducts');
        let cart = new app.Cart();
    this.$store.commit('setCartCount', cart.count());
    //let cart = new app.Cart();
    //app.store.cartCount = cart.count();
  },
  computed: {
    cartCount: function() {
      return this.$store.state.cartCount;
    }
  }
}
</script>

<style lang='scss'>
@import "./styles/zipfoods.scss";
</style>
