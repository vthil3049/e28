<template>
  <div id="app" class="container">
    <HeaderPage></HeaderPage>
    <div class='text-center'>
      <nav nav class="nav navbar bg-dark">
        <ul class="nav  justify-content-center">
          <li v-for='link in links' :key='link'  class="nav-item">
            <router-link :to='{name: link}' exact  class="nav-link active">{{ link.toUpperCase()}}</router-link>
          </li>
        </ul>
      </nav>

      <h4 v-if="items.length > 0">We have {{items.length}} registrations so far</h4>
      <router-view></router-view>
    </div>
    <br />
    <FooterPage></FooterPage>
  </div>
</template>

<script>
//import * as app from '@/common/app.js';

import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue'
export default {
  name: 'App',
  components: {
    HeaderPage,
    FooterPage,
  },
  data: function(){
    return {
      links:  ['home', 'program', 'credits', 'add item'],
      program: null,
      //items: []
    }
  },
  computed: {
    items: function(){
      return this.$store.state.items;
    }
  },
  mounted: function()
  {
    this.$store.dispatch('setItems');

  //   utils.initFirebase();
  // //utils.seedProgram();
  //   utils.refreshProgram();

  }
}
</script>

<style  lang='scss'>
@import "./styles/styles.scss";
</style>
