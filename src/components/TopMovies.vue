<template>
  <div class="seen-collection" data-collectionid="top-250">
    <div class="article">
      <h3>IMDb Charts</h3>
      <h1 class="header">Top Rated Movies</h1>
      <hr>
      <div class="lister">
        <div>
          <div class="nav">
            <div class="controls float-right lister-activated" style="display: block;">
              Sort by:
              <select name="sort" class="lister-sort-by">
                <option value="rk:ascending" selected="selected">
                  Ranking
                </option>
                <option value="ir:descending">
                  IMDb Rating
                </option>
                <option value="us:descending">
                  Release Date
                </option>
                <option value="nv:descending">
                  Number of Ratings
                </option>
                <option value="ur:descending">
                  Your Rating
                </option>
              </select>
              <span class="global-sprite lister-sort-reverse descending" data-sort="rk:desc" title="Ascending order">
    </span>
            </div>
            <div class="desc">Showing <span>20</span> Titles</div>
          </div>
        </div>
        <br class="clear">
        <table class="chart full-width" data-caller-name="chart-top250movie" v-if="movies.length">
          <colgroup>
            <col class="chartTableColumnPoster">
            <col class="chartTableColumnTitle">
            <col class="chartTableColumnIMDbRating">
            <col class="chartTableColumnYourRating">
            <col class="chartTableColumnWatchlistRibbon">
          </colgroup>
          <thead>
          <tr>
            <th></th>
            <th width="40%">Rank &amp; Title</th>
            <th width="40%">Director</th>
            <th>IMDb Rating</th>
          </tr>
          </thead>
          <tbody class="lister-list">
            <movie v-for="(movie, key) in movies"
                   :movie="movie"
                   :index="key + 1"
                   :key="movie.imdbID">
            </movie>
          </tbody>
        </table>
        <div v-else>
          <h2 class="loading">Loading...</h2>
        </div>
      </div>
      <hr>
      <p>The Top Rated Movie list only includes theatrical features.</p>
      <ul>
        <li>Shorts, TV movies, and documentaries are not included</li>
        <li>The list is ranked by a formula which includes the number of ratings each movie received from users, and value of ratings received from regular users</li>
        <li>To be included on the list, a movie must receive ratings from at least 25000 users</li>
      </ul>
      <a href="https://help.imdb.com/article/imdb/featured-content/why-doesn-t-a-title-with-the-average-user-vote-of-9-4-appear-in-your-top-250-movies-or-tv-list/GTU67Q5QQ8W53RJT?pf_rd_m=A2FGELUUNOQJNL&amp;pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&amp;pf_rd_r=07A09WYR9XH18C7DBGW3&amp;pf_rd_s=center-1&amp;pf_rd_t=15506&amp;pf_rd_i=top&amp;ref_=cons_chttp_learnmore">Learn more</a> about how list ranking is determined.
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Movie from './Movie.vue'
  import { GET_MOVIES_ACTION } from '../store/constants'

  export default {
    name: 'top-movies',
    components: {
      Movie
    },
    created () {
      this.$store.dispatch(GET_MOVIES_ACTION)
    },
    computed: {
      ...mapGetters([
        'movies'
      ])
    }
  }
</script>

<style lang="scss">
.loading {
  width: max-content;
  margin: 0 auto;
}
</style>
