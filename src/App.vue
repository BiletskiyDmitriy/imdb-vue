<template>
  <div id="root">
    <header-component></header-component>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderComponent from './components/HeaderComponent.vue'
  import { INIT_FAVORITE_LIST_ACTION } from './store/constants'

  export default {
    name: 'app',
    components: {
      HeaderComponent
    },
    created () {
      this.$store.dispatch(INIT_FAVORITE_LIST_ACTION)
    }
  }
</script>

<style lang="scss">
  @import "sass/main";
  #consumer_main_nav .navCategory {
    margin-top: 6px !important;
  }
</style>
