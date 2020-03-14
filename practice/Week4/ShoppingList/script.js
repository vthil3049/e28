// The Vue instance
let app = new Vue({
  el: '#app',
  data: {
    totalCount: 0,
    itemName: null,
    itemQuantity: 0,
    items: [],
    addItem: function () {
      app.items.push(app.itemName);
    }
  },
  methods: {
    submitItem: function (event) {
      console.log(event);
      this.items.push({ name: this.itemName, count: this.itemQuantity });
      this.totalCount += this.itemQuantity;
    }
  }

})