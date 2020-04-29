<template>
  <div id="app" class="container">
    <HeaderPage></HeaderPage>
    <div class='text-center'>
      <nav nav class="nav navbar navbar-dark bg-dark">
        <ul class="nav  justify-content-center">
          <li v-for='link in links' :key='link'  class="nav-item">
            <router-link :to='{name: link}' exact  class="nav-link text-light active">{{ link.toUpperCase()}}</router-link>
          </li>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
    <!-- <ProgramPage></ProgramPage>
    <CreditsPage></CreditsPage> -->
    <br />
    <FooterPage></FooterPage>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ProgramPage from './components/ProgramPage.vue'
// import CreditsPage from './components/CreditsPage.vue'
// import HomePage from './components/HomePage.vue'
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';
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
    }
  },
  mounted: function()
  {
    // Initialize firebase
    let projectId = 'e28-talent-show';
    if (!firebase.apps.length){
      firebase.initializeApp({
        apiKey: 'AIzaSyCkaZeNdz_IUsGUUwR_y6U-Vywo7Bg0tW4',
        authDomain: projectId + '.firebaseapp.com',
        databaseURL: 'https://' + projectId + '.firebaseio.com',
        projectId: projectId,
      });
    }
    // Initialize firestore
    let api = firebase.firestore();
    api.collection('items')
    .doc('j0JO13wdDXqpuF5czM4r')
    .get()
    .then(function(doc) {
      console.log(doc.data());
    })
    .catch(function(error) {
      console.log('Error getting documents: ' + error);
    });

    // api.collection("items").add({
    //   "title": "Twirlers",
    //   "type": "dance",
    //   "description":"Aerobatic dance",
    //   "performers": ["Helen Pittman", "Mandy Travis"]
    // })
    // .then(function(docRef) {
    //   console.log("Document written with ID: ", docRef.id);
    // })
    // .catch(function(error) {
    //   console.error("Error adding document: ", error);
    // });
    api.collection("items").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().title}`);
        console.log(JSON.stringify(doc.data()));
    });
});
  }
}
</script>

<style  lang='scss'>
@import "./styles/styles.scss";
</style>
