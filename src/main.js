// var Vue = require('vue')
// var App = require('./App.vue')
// import VHeader from '@/components/Header.vue'
// import VAside from '@/components/Aside.vue'
// import VArticle from '@/components/Article.vue'
// import VFooter from '@Í/components/Footer.vue'
// new Vue({
//     el: 'body',
//     components: {
//         app: App
//     }
// })

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import router from './router/index';
const App = require('./App.vue');
 
Vue.use(VueRouter);
Vue.use(BootstrapVue);
 
 
 new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});