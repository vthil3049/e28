import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import * as app from '@/common/app.js';

export default new Vuex.Store({
  state: {
    cartCount: 0,
    products: [],
  },
  mutations: {
    setCartCount(state, payload) {
      state.cartCount = payload;
    },
    updateCartCount(state, payload) {
      state.cartCount += payload;
    },
    updateProducts(state, payload) {
      state.products = payload;
    }
  },
  actions: {
    setProducts(context) {
        app.api.all('products').then(response => {
            context.commit('updateProducts', response);
        });
    }
}
})
