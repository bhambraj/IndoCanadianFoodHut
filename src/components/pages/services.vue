<template>
  <div class='services'>
    <p>{{title}}</p>
    <md-card v-for='service in services'>
    <md-card-area md-inset>
      <md-card-media md-ratio='16:9'>
        <img :src='service.image' :alt='service.title'>
      </md-card-media>

      <md-card-header>
        <div class='md-subhead'>
          <md-icon>{{service.icon}}</md-icon>
          <span class='md-title'> {{service.title}}</span>
        </div>
      </md-card-header>

      <md-card-content>
        {{service.description}}
      </md-card-content>
    </md-card-area>
    </md-card>
  </div>
</template>

<script>
  const allServices = require('../../../static/data/services.json')

  export default {
    name: 'services',
    created: function () {
      this.services = allServices.services
    },
    components: {},
    data () {
      return {
        title: 'Services',
        services: [
          {
            'title': 'Error',
            'image': 'http://hemmingways.mf-tested.com/wp-content/uploads/2016/08/catering1.jpg',
            'description': 'Error',
            'icon': 'error'
          }
        ]
      }
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .md-card {
    width: 31%;
    margin: 1%;
    display: flex;
    float: left;
    clear: none;
  }

  @media only screen and (max-width: 601px) {
    .md-card {
      width: 95%;
      margin: 2%;
    }

  }
</style>
