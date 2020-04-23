<template>
  <div id="app" class="container">

    <HomePage msg="Now Playing"/>
    <div class='text-center'>
      <nav class="nav">
        <a class="nav-link active" href="#">Active</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </nav>
    </div>
    <ProgramPage></ProgramPage>
    <CreditsPage></CreditsPage>
    <br />
    <FooterPage></FooterPage>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ProgramPage from './components/ProgramPage.vue'
import CreditsPage from './components/CreditsPage.vue'
import HomePage from './components/HomePage.vue'
import FooterPage from './components/FooterPage.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    HomePage,
    CreditsPage,
    FooterPage,
    ProgramPage
  }
}
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}
</style>
