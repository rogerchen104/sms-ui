
<template>
  <div class="main-wrapper">
    <div id="app" class="app">
      <v-header></v-header>
      <v-aside></v-aside>
      <div class="sidebar-overlay" id="sidebar-overlay"></div>
      <transition name="fade">
        <keep-alive>       
          <router-view></router-view>
        </keep-alive>
      </transition>
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
  import VHeader from './components/Header.vue'
  import VAside from './components/Aside.vue'
  import VArticle from './components/Article.vue'
  import VFooter from './components/Footer.vue'

  export default {
    data() {
      return {
        msg: 'Hello from vue-loader!'
      }
    },
    components: {
      VHeader,
      VAside,
      VArticle,
      VFooter
    }
  }
</script>