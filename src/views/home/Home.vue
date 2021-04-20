<template>
  <div id="home">

    <nav-bar class="home-nav">
      <div slot="navbar-middle">Lady Clothing</div>
    </nav-bar>

    <scroll class="home_scroll_content" 
            ref="scroll" 
            :probe-type="3"
            @scroll="homeScroll"
            :pull-up-load="true"
            @pullingUp="loadMoreDelay">
      <b-carousel>
        <b-carousel-slide v-for="(image, index) in this.banners"
                          :key="index" 
                          :img-src="$imageUrl(image.imageId)">
        </b-carousel-slide>
      </b-carousel>
      <tab-control class="tab-control" 
                 :titles="['POP', 'NEW ARRIVAL', 'SALE']"
                 @tabClick="tabClick"/>
      <product-list :productList="products[currentTag].productsList"></product-list>
    </scroll>

    <scroll-top @click.native="scrollToTop" v-show="isShowScrollTop"></scroll-top>
  </div>
</template>

<script>
  // import common components
  import NavBar from "components/common/navbar/NavBar"
  import Scroll from 'components/common/scroll/Scroll'

  import TabControl from 'components/content/tabControl/TabControl'
  import ProductList from 'components/content/products/ProductList'
  import ScrollTop from 'components/content/scrollTop/ScrollTop'
  // import sub components
  // import recommendationView from './childComponents/RecommendationView';
  // import httpRequest
  import {getBannerImages, getProductsData} from 'api/home'
  import {debounce} from 'util/util'

  export default {
    name: "Home",
    components: {
      NavBar,
      Scroll,
      TabControl,
      ScrollTop,
      ProductList
    },
    data() {
      return {
        banners: [],
        recommendations: [],
        products: {
          'pop': {pageNum: 0, productsList: []},
          'new': {pageNum: 0, productsList: []},
          'sale': {pageNum: 0, productsList: []}
        },
        currentTag: 'pop',
        isShowScrollTop: false
      }
    },
    methods: {
      /**
       * click listener
       */
      tabClick(index) {
        this.currentTag = Object.keys(this.products)[index]
      },
      scrollToTop() {
        this.$refs.scroll.scroll.scrollTo(0, 0, 500)
      },
      homeScroll(position) {
        this.isShowScrollTop = Math.abs(position.y) > 200
      },
      loadMoreDelay() {
        debounce(this.loadMore, 500)()
      },
      loadMore() {
        this.getProducts(this.currentTag)
        this.$refs.scroll.finishPullingUp()
        this.$refs.scroll.scroll.refresh()
        // let timer = null
        // if (timer) clearTimeout(timer)
        // timer = setTimeout(() => {
        //   this.getProducts(this.currentTag)
        //   this.$refs.scroll.finishPullingUp()
        //   this.$refs.scroll.scroll.refresh()
        // }, 500)
      },
      /**
       * httpRequest
       */
      getBanner() {
        getBannerImages().then(res => {
          this.banners = res.data
        })
      },
      getProducts(productTag) {
        const pageNum = this.products[productTag].pageNum + 1
        getProductsData(productTag, pageNum).then(res => {
          this.products[productTag].productsList.push(...res.data.list)
          this.products[productTag].pageNum += 1
          console.log(pageNum);
        })
      }
    },
    created() {
      this.getBanner()

      this.getProducts('pop')

      this.getProducts('new')

      this.getProducts('sale')
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

  #home {
    padding-top: 38px;
    height: 100vh;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: rgb(255, 255, 255);
    font-family: 'Dancing Script', cursive;
    font-size: 1.4rem;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    
    z-index: 999;
  }
  /* .tab-control {
     position: sticky; 
     top: 2.38rem; 
  } */

  .home_scroll_content {
    height: calc(100% - 48px);
    overflow: hidden;
  }
</style>