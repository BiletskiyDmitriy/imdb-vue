<template>
  <tr>
    <td class="posterColumn">
      <div>
        <a>
          <img :src="movie.Poster" width="45" height="67">
        </a>
      </div>
    </td>
    <td class="titleColumn">
      <div>
        {{ index }}.
        <a>{{ movie.Title }}</a>
        <span class="secondaryInfo">({{ movie.Year }})</span>
      </div>
    </td>
    <td class="titleColumn">
      <a href="" style="margin-left: 20px;">{{ movie.Director }}</a>
    </td>
    <td>
      <div class="movie-wrapper">
        <div class="ratingColumn imdbRating">
          <strong>{{ movie.imdbRating }}</strong>
        </div>
        <div class="ratingColumn">
          <div class="seen-widget seen-widget-tt0111161" :class="{ 'seen': isFavorite(movie.imdbID) }">
            <div class="inline">
              <div class="unseen" @click="addToFavorite(movie.imdbID)"></div>
              <div class="seen" @click="removeFromFavorite(movie.imdbID)"></div>
            </div>
          </div>
        </div>
        <div class="watchlistColumn">
          <div class="wlb_ribbon" data-tconst="tt0111161" data-recordmetrics="true" style="position: relative;">
          </div>
        </div>
      </div>
    </td>
  </tr>
</template>

<script>
  import { ADD_TO_FAVORITE_LIST_ACTION, REMOVE_FROM_FAVORITE_LIST_ACTION } from '../store/constants'

  export default {
    name: 'movie',
    props: {
      movie: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
      }
    },
    computed: {
      favoriteIds () {
        return this.$store.state.favorite
      }
    },
    methods: {
      isFavorite (id) {
        return this.favoriteIds.includes(id)
      },
      addToFavorite (id) {
        this.$store.dispatch(ADD_TO_FAVORITE_LIST_ACTION, id)
      },
      removeFromFavorite (id) {
        this.$store.dispatch(REMOVE_FROM_FAVORITE_LIST_ACTION, id)
      }
    }
  }
</script>

<style lang="scss">

</style>
