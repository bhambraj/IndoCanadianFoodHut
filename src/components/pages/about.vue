<template>
  <div class='about'>
    <p>Call us</p>
    <md-card md-with-hover v-for="owner in owner">
      <md-card-media>
        <img :src='owner.avatar' :alt='owner.name' class='img'>
      </md-card-media>

      <md-card-header>
        <div class='md-title'>{{owner.name}}</div>
        <div class='md-subhead'>{{owner.title}}</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions>
          <span style="flex:1"></span>
          <md-button class="md-raised md-primary" :href='owner.phone'>Call</md-button>
          <md-button class="md-raised md-primary" :href='owner.email'>Email</md-button>
          <span style='flex: 1'></span>
          <md-button class='md-icon-button' md-expand-trigger>
            <md-icon>keyboard_arrow_down</md-icon>
          </md-button>
        </md-card-actions>
        <md-card-content>
          {{owner.description}}
        </md-card-content>
      </md-card-expand>
    </md-card>
    <md-card md-with-hover>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5440538089974!2d-79.74319318492516!3d43.65765367912111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b15618c121c17%3A0x23ed57537531f490!2sIndo-Canadian+Food+Hut!5e0!3m2!1sen!2sca!4v1477595539827'
        frameborder='0' allowfullscreen></iframe>
    </md-card>
    <md-card md-with-hover>
      <md-list class='custom-list md-triple-line'>
        <h2 href='https://www.google.ca/search?q=indo+canadian+food+hut&lrd=0x882b15618c121c17:0x23ed57537531f490,1'
            target='_blank'>
          Realtime reviews from Google Maps</h2>
        <md-list-item v-for='review in reviews' :href='review.author_url' target="_blank">
          <md-avatar>
            <img :src='review.profile_photo_url' :alt='review.author_name'>
          </md-avatar>

          <div class='md-list-text-container'>
            <span>{{review.author_name}}</span>
            <p>{{review.text}}</p>
          </div>

          <md-button class='md-icon-button md-list-action'>
            <md-icon class='md-success'>star</md-icon>
          </md-button>

          <md-divider class='md-inset'></md-divider>
        </md-list-item>
      </md-list>
    </md-card>
  </div>
</template>

<script>
  import axios from 'axios'

  const mapsAPI = 'https://maps.googleapis.com/maps/api/place/details/json'
  const ownerDetails = require('../../../static/data/owner.json')

  export default {
    name: 'about',
    components: {},
    created: function () {
      this.getReviews()
      this.owner = ownerDetails.owner
    },
    methods: {
      getReviews () {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
        // Make a request for a user with a given ID
        axios.get(mapsAPI, {
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          params: {
            'placeid': 'ChIJFxwSjGEVK4gRkPQxdVNX7SM',
            'key': 'AIzaSyAp4mx6kQ2bnCuq8YTgWogpExihHB7TXjs'
          }
        })
          .then(function (response) {
            this.reviews = response.data.result.reviews
            console.log(response)
            return this.reviews
          })
          .catch(function (error) {
            console.error(`Error Fetching Reviews from Google Maps
            \n Error: ${error}
            \n Status: ${error.statusText}
            \n Status Code: ${error.statusCode}`)
          })
      }
    },
    data () {
      return {
        title: 'Indo-Canadian Food Hut - About Us',
        owner: '',
        reviews: [
          {
            'aspects': [
              {
                'rating': 2,
                'type': 'overall'
              }
            ],
            'author_name': 'Simranpreet Singh',
            'author_url': 'https://plus.google.com/102866337430466419625',
            'language': 'en',
            'profile_photo_url': '//lh4.googleusercontent.com/-3b2M_adcr0E/AAAAAAAAAAI/AAAAAAAAABc/NWixmYNI-VM/photo.jpg',
            'rating': 4,
            'text': 'Great food man..... This is just India behind the door.',
            'time': 1455394816
          },
          {
            'aspects': [
              {
                'rating': 3,
                'type': 'overall'
              }
            ],
            'author_name': 'gurkaran aujla',
            'author_url': 'https://plus.google.com/115314894630012934979',
            'language': 'en',
            'profile_photo_url': '//lh6.googleusercontent.com/-MK1D6T14J4U/AAAAAAAAAAI/AAAAAAAAAD4/HLID_NKJnK4/photo.jpg',
            'rating': 5,
            'text': 'some items in the menu are absolutely fantastic',
            'time': 1470428935
          }
        ]
      }
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .md-card {
    width: 46%;
    height: 400px;
    margin: 2%;
    float: left;
    border: 0;
  }

  iframe {
    display: inline-flex;
    float: right;
    width: 100%;
    height: 100%;
  }

  .md-list-item-holder {
    padding: 3%;
  }

  .img {
    max-width: 150px;
  }

  @media only screen and (max-width: 600px) {
    .md-card {
      width: 95%;
      margin: 2%;
    }
  }
</style>
