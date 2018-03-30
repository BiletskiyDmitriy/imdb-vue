<template>
  <div class="seen-collection" data-collectionid="top-250">
    <div class="article">
      <h3>IMDb Chart</h3>
      <h1 class="header">Top Rated Movies</h1>
      <hr>
      <div class="lister">
        <br class="clear">
        <div class='vuestic-chart' v-if="chartData.labels.length">
          <pie-chart :options="options" :data="chartData"></pie-chart>
        </div>
      </div>
      <hr>
      <p>The Top Rated Movie list only includes theatrical features.</p>
      <ul>
        <li>Shorts, TV movies, and documentaries are not included</li>
        <li>The list is ranked by a formula which includes the number of ratings each movie received from users, and value of ratings received from regular users</li>
        <li>To be included on the list, a movie must receive ratings from at least 25000 users</li>
      </ul>
      <a href="">Learn more</a> about how list ranking is determined.
    </div>
  </div>
</template>

<script>
  import PieChart from './PieChart'
  import { GET_MOVIES_ACTION } from '../store/constants'
  import { colors } from '../values'

  export default {
    components: {
      PieChart
    },
    created () {
      this.$store.dispatch(GET_MOVIES_ACTION)
    },
    data () {
      return {
        options: {}
      }
    },
    computed: {
      chartData () {
        let data = this.$store.state.movies.reduce((memory, current) => {
          const decade = parseInt(current.Year / 10) + '0x'

          if (memory.hasOwnProperty(decade)) {
            memory[decade]++
          } else {
            memory[decade] = 1
          }

          return memory
        }, {})

        return {
          labels: Object.keys(data),
          datasets: [{
            backgroundColor: colors,
            data: Object.values(data)
          }]
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
