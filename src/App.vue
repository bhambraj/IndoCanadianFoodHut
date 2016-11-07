<template>
  <div id="app" v-md-theme="'default'">
    <customHeader></customHeader>
    <transition
      name="rollIn"
      enter-active-class="fadeIn"
      leave-active-class="pulse">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>

    <customFooter></customFooter>
  </div>
</template>

<script>
  require('vue2-animate/dist/vue2-animate.min.css')

  import Vue from 'vue'
  import VueMaterial from 'vue-material'
  import 'vue-material/dist/vue-material.css'

  Vue.use(VueMaterial)

  Vue.material.theme.registerAll({
    default: {
      primary: 'red',
      accent: 'white'
    },
    phone: {
      primary: 'indigo',
      accent: 'pink'
    }
  })

  import customHeader from './components/customHeader.vue'
  import customFooter from './components/customFooter.vue'

  export default {
    name: 'app',
    components: {
      customHeader,
      customFooter
    }
  }
</script>

<style>
  #app {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
