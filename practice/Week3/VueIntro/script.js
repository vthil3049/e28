// The Vue instance
let app = new Vue({
  el: '#app',
  data: {
    playerName: null,
    guess: null, // New
    'guesses': [] ,
    isAdmin: true
  }
})