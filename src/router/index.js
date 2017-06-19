import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import TestContent from '../components/TestContent'
import VArticle from '../components/Article.vue'
import DemoForm from '../components/DemoForm'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VArticle',
      component: VArticle
    },
    {
      path: '/test',
      name: 'testContent',
      component:TestContent
    },
     {
      path: '/demo-form',
      name: 'demoForm',
      component:DemoForm
    },
  ]
})
