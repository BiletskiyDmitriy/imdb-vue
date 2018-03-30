<template>
  <div id="nb20" class="navbarSprite">
    <div id="navbar" class="navbarSprite">
    <span id="home_img_holder">
<a href="/?ref_=nv_home" title="Home" class="navbarSprite" id="home_img"></a>  <span class="alt_logo">
    <a href="/?ref_=nv_home" title="Home">IMDb</a>
  </span>
</span>
      <form method="get" action="/find" class="nav-searchbar-inner" id="navbar-form">
        <div id="nb_search">
          <noscript>&lt;div id="more_if_no_javascript"&gt;&lt;a href="/search/"&gt;More&lt;/a&gt;&lt;/div&gt;</noscript>
          <button id="navbar-submit-button" class="primary btn" type="submit"><div class="magnifyingglass navbarSprite"></div></button>
          <input type="hidden" name="ref_" value="nv_sr_fn">
          <input type="text" autocomplete="off" value="" name="q" id="navbar-query" placeholder="Find Movies, TV shows, Celebrities and more...">
          <div class="quicksearch_dropdown_wrapper">
            <select name="s" id="quicksearch" class="quicksearch_dropdown navbarSprite">
              <option value="all">All</option>
            </select>
          </div>
          <div id="navbar-suggestionsearch" style="left: 140px; top: 38px; width: 534px; display: none;"></div>
        </div>
      </form>
      <div id="megaMenu">
        <ul id="consumer_main_nav" class="main_nav">
          <li class="spacer"></li>
          <li class="js_nav_item" id="navTitleMenu">
            <p class="navCategory">
              <router-link to="/top">Top 20</router-link>
            </p>
          </li>
          <li class="spacer"></li>
          <li class="js_nav_item" id="navNameMenu">
            <p class="navCategory">
              <router-link to="/chart">Chart</router-link>
            </p>
          </li>
          <li class="spacer"></li>
          <li class="js_nav_item" id="navNewsMenu">
            <p class="navCategory">
              <router-link to="/favorite">Favorite</router-link>
            </p>
          </li>
          <li class="spacer"></li>
        </ul>
      </div>
      <div id="nb_extra">
        <ul id="nb_extra_nav" class="main_nav">
          <li class="js_nav_item" id="navProMenu">
            <p class="navCategory">
              <a href="https://pro.imdb.com/signup/index.html?rf=cons_nb_hm&amp;ref_=cons_nb_hm"> <img alt="IMDbPro Menu" src="https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/navbar/imdbpro_logo_nb-3000473826._CB499603813_.png">
              </a>            </p>
            <span class="downArrow"></span>
            <div id="navMenuPro" class="imdb-pro-ad sub_nav">
              <a href="https://pro.imdb.com/signup/index.html?rf=cons_nb_hm&amp;ref_=cons_nb_hm" class="imdp-pro-ad__link"> <div id="proAd" class="imdb-pro-ad__image">
                <img alt="Go to IMDbPro" height="180" width="174" src="https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/navbar/imdbpro_menu_user-4091932618._CB499606980_.png" >
              </div>
                <section class="imdb-pro-ad__content">
                  <div class="imdb-pro-ad__title">The leading information resource for the entertainment industry</div>
                  <p class="imdb-pro-ad__line">Find industry contacts &amp; talent representation</p>
                  <p class="imdb-pro-ad__line">Manage your photos, credits, &amp; more</p>
                  <p class="imdb-pro-ad__line">Showcase yourself on IMDb &amp; Amazon</p>
                  <span class="imdb-pro-ad__button">Go to IMDbPro</span>
                </section>
              </a>            </div>
          </li>
          <li class="spacer"><span class="ghost">|</span></li>
          <li>
            <a href="https://help.imdb.com/imdb?ref_=cons_nb_hlp">Help</a>
          </li>
          <li class="social">

            <a href="/offsite/?page-action=fol_fb&amp;token=BCYgBdPJd3ZYEt7hgBhKkUg_At2yR6JgKWPpiyDGRI-8eEl_JiEP3bFssS7GYIroIV1ib743uRsP%0D%0Au1C0HkZqy854lvGmuMQ-bI4CjrvdYvwFfQVBmoI72DQjRbIVPjgjTzTLkJe5DJAM9okjefrvMXm2%0D%0As6PwUN62nr10RbLXkVCHTAkkBzj1R421JLtb6YKwQDbT15lUBMl_EK3JoQPK5Bu61g%0D%0A&amp;ref_=chttp_nv_fol_fb" title="Follow IMDb on Facebook" target="_blank" itemprop="url"> <span class="desktop-sprite follow-facebook"></span>
            </a>
            <a href="/offsite/?page-action=fol_tw&amp;token=BCYnBg0pR69n54qGy_8GSiPdilSBCFIvu4hnnX655LhvkH1Pa13QyTsDEuVq-fE6vx_WFg8auJKd%0D%0AnryOhHCSuhm5jzZN5fiF4To4Oxd-G9mSNLt6ACrjZrYoERK9HlnZWkqn83iYnF7iUMuMEoAYdRgE%0D%0AMMyFLl95VGueYP10YGlGBa7NNxnoqOk-kJJyet60_x0krN1r5TlugBOQ7_zo70gJAQ%0D%0A&amp;ref_=chttp_nv_fol_tw" title="Follow IMDb on Twitter" target="_blank" itemprop="url"> <span class="desktop-sprite follow-twitter"></span>
            </a>
            <a href="/offsite/?page-action=fol_inst&amp;token=BCYmytf7RO0Ahy56oJkmbYMKydKT9csl827gQ36cdhsoecVtdwiSapB6eu7A3GvdG0_Wk0URUeG5%0D%0AbPNFO6mrX0GMRaGlqJLjd6nGlt7CQMBGH6c6TaOJNWt5G9djcPgcoOHfFiq0vrKnSoh9tlD8FD3G%0D%0A3oron6hyaJbtV-sn1P-V3-fDKESs1GqCDpCd72g2aQLryjghtU1FUNV8yWDAUOKcaw%0D%0A&amp;ref_=chttp_nv_fol_inst" title="Follow IMDb on Instagram" target="_blank" itemprop="url"> <span class="desktop-sprite follow-instagram"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'header-component'
  }
</script>

<style lang="scss">

</style>
