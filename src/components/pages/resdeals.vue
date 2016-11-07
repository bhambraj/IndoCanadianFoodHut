<template>
  <div class="deals">
    <h2>{{title}}</h2>

    <br/>
    <md-whiteframe md-elevation="2" v-for="days in deals">
      <div v-if="days.dayNumber === day">
        <div v-for="deal in days.dailyDeal" class="grid">
          <div>
            <img class="responsive" :src="deal.image" :alt="deal.title">
          </div>
          <div>
            <div class="md-display-3">{{deal.price}}</div>
            <div class="md-display-1">{{deal.title}}</div>
          </div>
        </div>
      </div>
    </md-whiteframe>
    <md-whiteframe class="grid">
      <div class="grid-item animated zoomIn" v-for="item in why">
        <div>
          <i class=" material-icons md-48 md-red">{{item.icon}}</i>
        </div>
        <span>{{item.label}}</span>
      </div>
    </md-whiteframe>
  </div>
</template>

<script>
  const allDeals = require('../../../static/data/deals.json')

  export default {
    name: 'deals',
    components: {},
    created: function () {
      this.getDay()
      this.deals = allDeals.deals
    },
    methods: {
      getDay () {
        const date = new Date()
        this.day = date.getDay()
      }
    },
    data () {
      return {
        title: 'Today\'s Deals',
        day: 1,
        deals: '',
        why: [
          {
            icon: 'school',
            label: 'Special packages for Students'
          },
          {
            icon: 'local_dining',
            label: 'Veg and Non-Veg prepared Separately'
          },
          {
            icon: 'attach_money',
            label: 'Competitive Prices'
          },
          {
            icon: 'local_shipping',
            label: 'Free Home Delivery (> $25)'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .md-card {
    width: 300px;
    margin: 1%;
    display: flex;
    float: left;
    clear: none;
  }

  .responsive {
    height: 300px;
    width: auto;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    margin: -0.5em;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .grid > * {
    flex: 1 0 10em;
    margin: 1em;
  }

  .grid-item {
    height: 200px;
    padding: 2%;
    text-align: center;
  }

  @media only screen and (max-width: 500px) {
    .md-card {
      width: 94%;
      margin: 3%;
    }

    .grid > * {

    }
  }

  .md-whiteframe {
    margin: 3% 0;
  }

  .md-48 {
    font-size: 100px;
    margin: 7%;
    padding: 2%;

  }

  .material-icons.md-red {
    color: rgba(255, 0, 0, 0.60);
  }
</style>
