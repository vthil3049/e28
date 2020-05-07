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
// import {products} from './products.js';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';

export default {
  name: "App",
  components: {

  },
  data: function(){
    return {
      links: ['home', 'products', 'categories', 'add a product'],
      // products: products,
      page: 'home'
    };
  },
  mounted: function() {
    // Initialize firebase
    let projectId = 'e28-zipfoods-28f2b';
    firebase.initializeApp({
      apiKey: 'AIzaSyAmJzGwjImnS-Tz5txuJ-w9B-fpsQfdWIU',
      authDomain: projectId + '.firebaseapp.com',
      databaseURL: 'https://' + projectId + '.firebaseio.com',
      projectId: projectId,
    });

    // Initialize firestore
    let api = firebase.firestore();
    api.collection('products')
      .doc('1P4tR6PvsHtZl68O12YI')
      .get()
      .then(function(doc) {
          console.log(doc.data());
      })
      .catch(function(error) {
          console.log('Error getting documents: ' + error);
      });

  }
}
</script>

<style lang='scss'>
@import "./styles/zipfoods.scss";
</style>
