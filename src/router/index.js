import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import TestContent from '../components/TestContent'
import VArticle from '../components/Article.vue'
import DemoForm from '../components/DemoForm'
import DemoButton from '../components/DemoButton'
import DemoStaticTable from '../components/demo/DemoStaticTable'
import DemoCards from '../components/demo/DemoCards'
import DemoGrid from '../components/demo/DemoGrid'
import DemoIcons from '../components/demo/DemoIcons'
import DemoItemsList from '../components/demo/DemoItemsList'
import DemoItemEditor from '../components/demo/DemoItemEditor'
import VbDemoComponentPage from '../components/demo/vb/VbDemoComponentPage'
import SmsAuthSetting from '../components/sms/AuthSetting'

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
    {
      path:'/demo-button',
      name: 'demoButton',
      component:DemoButton
    },{
        path:'/demo-static-table',
      name: 'demoStaticTable',
      component:DemoStaticTable    
    },
    {
        path:'/demo-cards',
      name: 'demoCards',
      component:DemoCards    
    },
    {
        path:'/demo-grid',
      name: 'demoGrid',
      component:DemoGrid    
    },
    {
        path:'/demo-icons',
      name: 'demoIcons',
      component:DemoIcons        
    },{
      path:'/demo-items-list',
      name: 'demoItemsList',
      component:DemoItemsList
    },{
      path:'/demo-items-editor',
      name: 'demoItemsEditor',
      component:DemoItemEditor
    },{
      path:'/demo-component-page',
      name: 'VbDemoComponentPage',
      component:VbDemoComponentPage
    },{
      path:'/sms/auth-setting',
      name: 'SmsAuthSetting',
      component: SmsAuthSetting
    }
  ]
})
