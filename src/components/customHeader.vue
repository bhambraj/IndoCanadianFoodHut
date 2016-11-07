<template>
  <div class="customHeader" v-touch:swipeleft="onSwipeLeft" v-touch:swiperight="onSwipeRight">
    <!--Header for Desktop - Start-->
    <md-toolbar>
      <div class="md-toolbar-container">
        <md-button class="md-icon-button" @click="toggleLeftSidenav">
          <md-icon>menu</md-icon>
        </md-button>
        <h2>{{title}}</h2>

        <div class="md-toolbar-container desktop-nav">
          <span style="flex: 1;"></span>

          <ul v-for="tab in tabs">
            <li class="md-display-2 navList">
              <router-link :to="tab.route">
                <md-button class="md-large">
                  <md-icon>{{tab.icon}}</md-icon>
                  {{tab.label}}
                </md-button>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </md-toolbar>
    <!--Header for Desktop - End-->

    <!--Header for Mobile - Start-->
    <md-sidenav class="md-left mobile-nav" ref="leftSidenav" v-md-theme="'phone'">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <img :src="image" :alt="title">
        </div>
      </md-toolbar>

      <md-list v-md-theme="'phone'">
        <md-list-item v-for="tab in tabs" v-md-theme="'phone'" @click="closeLeftSidenav">
          <router-link :to="tab.route">
            <md-icon>{{tab.icon}}</md-icon>
            <span>{{tab.label}}</span>
          </router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>
    <!--Header for Mobile - End-->

  </div>
</template>

<script>
  export default {
    name: 'customHeader',
    components: {},
    methods: {
      toggleLeftSidenav () {
        this.$refs.leftSidenav.toggle()
      },
      onSwipeRight () {
        this.$refs.leftSidenav.toggle()
        console.log('Side Nav Opened')
      },
      onSwipeLeft () {
        this.$refs.leftSidenav.close()
        console.log('Side Nav Closed')
      },
      closeLeftSidenav () {
        this.$refs.leftSidenav.close()
        console.log('Side Nav Closed')
      }
    },
    data () {
      return {
        title: 'Indo-Canadian Food Hut',
        image: 'https://b.zmtcdn.com/data/pictures/0/8903110/8a007946393092f69c02e731e00f1025.jpg',
        tabs: [
          {
            label: 'Deals',
            icon: 'whatshot',
            route: 'deals'
          },
          {
            label: 'Menu',
            icon: 'restaurant_menu',
            route: 'menu'
          },
          {
            label: 'Services',
            icon: 'room_service',
            route: 'services'
          },
          {
            label: 'About',
            icon: 'call',
            route: 'about'
          }
        ]
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
    width: 320px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  .navList {
    text-decoration: none;
  }

  .material-icons.md-18 {
    font-size: 18px;
  }

  .material-icons.md-24 {
    font-size: 24px;
  }

  .material-icons.md-36 {
    font-size: 36px;
  }

  .material-icons.md-48 {
    font-size: 48px;
  }

  @media (max-width: 700px) {
    .desktop-nav {
      display: none;
    }
  }
</style>
