<template>
  <div class="resmenu">
    <h3>Restaurant Menu</h3>
    <md-list>
      <md-list-item v-for="m in menu">
        <md-icon>{{m.icon}}</md-icon>
        <span>{{m.label }}</span>

        <md-list-expand>
          <md-list v-for="s in m.contains">
            <md-list-item>
              <md-avatar>
                <img :src="s.avatar" :alt="s.label">
              </md-avatar>

              <div class="md-list-text-container">
                <span>{{s.label}}</span>
              </div>

              <md-button class=" md-list-action">
                <span>$ {{s.price}}</span>
              </md-button>
            </md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
  const fullMenu = require('../../../static/data/menu.json')

  export default {
    name: 'resmenu',
    components: {},
    created: function () {
      this.menu = fullMenu.menu
    },
    methods: { },
    data () {
      return {
        title: 'Menu',
        menu: [
          {
            label: 'Snacks',
            icon: 'whatshot',
            contains: [
              {
                label: 'Samosa',
                avatar: 'http://www.classichalal.com/image/data/product_images/chicken_samosa.jpg',
                price: '1.00 / 2 pieces'
              }
            ]
          },
          {
            label: 'Desi Wraps',
            icon: 'local_dining',
            contains: [
              {
                label: 'Veggie Delight',
                avatar: 'http://www.classichalal.com/image/data/product_images/chicken_samosa.jpg',
                price: '4.99'
              }
            ]
          },
          {
            label: 'Drinks',
            icon: 'local_cafe',
            contains: [
              {
                label: 'Masala Tea',
                avatar: 'http://www.indiateaportal.com/wp-content/uploads/2014/10/indiantea-300x208.jpg',
                price: '1.25'
              }
            ]
          },
          {
            label: 'All time Favorites',
            icon: 'local_pizza',
            contains: [
              {
                label: 'Special Veg Thali',
                avatar: 'http://www.lytebite.com/wp-content/uploads/2016/01/Dinner_Veg.jpg',
                price: '6.49'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .md-input-container {
    margin: 2%;
  }

  .md-input {
    margin: 1%;
  }
</style>
