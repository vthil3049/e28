<template>
  <div id="app" class="container">
    <HeaderPage></HeaderPage>
    <div class='text-center'>
      <nav nav class="nav navbar navbar-dark bg-info">
        <ul class="nav  justify-content-center">
          <li v-for='link in links' :key='link'  class="nav-item">
            <router-link :to='{name: link}' exact  class="nav-link text-light active">{{ link.toUpperCase()}}</router-link>
          </li>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
    <br />
    <FooterPage></FooterPage>
  </div>
</template>

<script>
import * as utils from '@/common/utils'
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
      links:  ['home', 'program', 'credits'],
      program: null
    }
  },
  mounted: function()
  {
    utils.initFirebase();
    utils.refreshProgram();

  }
}
</script>

<style  lang='scss'>
@import "./styles/styles.scss";
</style>
