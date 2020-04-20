import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import ShowProducts from "./components/pages/ProductsPage.vue";
import ShowHome from "./components/pages/HomePage.vue";
import ShowCategories from "./components/pages/CategoriesPage.vue";
import ProductPage from "./components/pages/ProductPage.vue";
Vue.use(VueRouter);
Vue.config.productionTip = false
const routes = [
    { path: '/', component: ShowHome, name:'home' },
    { path: '/products', component: ShowProducts, name: 'products' },
    { path: '/products/:id', component: ProductPage, name: 'product', props:true },
    { path: '/categories', component: ShowCategories, name: 'categories'}
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
