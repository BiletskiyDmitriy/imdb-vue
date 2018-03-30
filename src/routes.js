import TopMovies from './components/TopMovies.vue'
import FavoriteMovies from './components/FavoriteMovies.vue'
import Chart from './components/Chart.vue'

export default [
  {
    name: 'top',
    alias: '/',
    path: '/top',
    component: TopMovies
  },
  {
    name: 'chart',
    path: '/chart',
    component: Chart
  },
  {
    name: 'favorite',
    path: '/favorite',
    component: FavoriteMovies
  }
]
