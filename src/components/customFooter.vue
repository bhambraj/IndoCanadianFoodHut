<template>
  <div class="customFooter">
    <md-bottom-bar md-shift>
      <md-bottom-bar-item md-icon="call" @click="call">Call us</md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script>
  export default {
    name: 'customFooter',
    components: {},
    methods: {
      call () {
        window.location.href = 'tel:+16479924407'
      }
    },
    data () {
      return {
        msg: 'Welcome to Indo-Canadian Food Hut'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
