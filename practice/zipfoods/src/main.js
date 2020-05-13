import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import store from '@/common/store';

import ShowProducts from "./components/pages/ProductsPage.vue";
import ShowHome from "./components/pages/HomePage.vue";
import ShowCategories from "./components/pages/CategoriesPage.vue";
import ProductPage from "./components/pages/ProductPage.vue";
import ProductCreatePage from "./components/pages/ProductCreatePage.vue";
import AdminPage from '@/components/pages/AdminPage.vue';
import CartPage from '@/components/pages/CartPage.vue';


Vue.use(VueRouter);
Vue.config.productionTip = false
const routes = [
  { path: '/', component: ShowHome, name:'home' },
  { path: '/products', component: ShowProducts, name: 'products' },
  { path: '/products/:slug', component: ProductPage, name: 'product', props:true },
  { path: '/categories', component: ShowCategories, name: 'categories'},
  { path: '/products/create', component: ProductCreatePage, name: 'add a product'},
    { path: '/admin', component: AdminPage, name: 'admin'},
  { path: '/cart', component: CartPage, name: 'cart' },
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  store:store,
  router: router,
  render: h => h(App),
}).$mount('#app')
