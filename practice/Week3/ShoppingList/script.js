// The Vue instance
let app = new Vue({
  el: '#app',
  data: {
    itemName: null,
    items: [],
    addItem: function () {
      app.items.push(app.itemName);
    }
  },

})