import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import ProgramPage from './components/ProgramPage.vue'
import CreditsPage from './components/CreditsPage.vue'
import HomePage from './components/HomePage.vue'
import AddItemPage from './components/AddItemPage.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);
import store from '@/common/store';

const routes = [
  { path: '/', component: HomePage, name:'home' },
  { path: '/program', component: ProgramPage, name: 'program' },
  { path: '/credits', component: CreditsPage, name: 'credits' },
  { path: '/add-item', component: AddItemPage, name: 'add item' },
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
   store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')
