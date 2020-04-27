import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import ProgramPage from './components/ProgramPage.vue'
import CreditsPage from './components/CreditsPage.vue'
import HomePage from './components/HomePage.vue'


Vue.config.productionTip = false
Vue.use(VueRouter);
const routes = [
    { path: '/', component: HomePage, name:'home' },
    { path: '/program', component: ProgramPage, name: 'program' },
    { path: '/credits', component: CreditsPage, name: 'credits' }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
    router: router,
  render: h => h(App),
}).$mount('#app')
