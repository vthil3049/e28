<template>
  <div id="app">
    <p>
      <img alt="logo" id="logo" src="./assets/images/zipfoods-logo.png" />
      <br />
    </p>
    <nav>
      <ul>
        <li v-for='link in links' :key='link'>
          <router-link :to='{name: link}' exact>{{ link }}</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import {products} from './products.js';
export default {
  name: "App",
  components: {

  },
  data: function(){
    return {
      links: ['home', 'products', 'categories'],
      products: products,
      page: 'home'
    };
  }
}
</script>

<style lang='scss'>
@import "./styles/zipfoods.scss";
</style>
