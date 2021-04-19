<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="navbar-middle">Lady Clothing</div>
    </nav-bar>

    <b-carousel>
      <b-carousel-slide v-for="(image, index) in this.banners" :key="index" :img-src="$imageUrl(image.imageId)"></b-carousel-slide>
    </b-carousel>

    <!-- <recommendation-view :recommendations="recommendations"/> -->
    <tab-control class="tab-control" 
                 :titles="['POP', 'NEW ARRIVAL', 'SALE']"
                 @tabClick="tabClick"/>
    <product-list :productList="products[currentTag].productsList"></product-list>
  </div>
</template>

<script>
  // import common components
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from 'components/content/tabControl/TabControl';
  import ProductList from 'components/content/products/ProductList';
  // import sub components
  // import recommendationView from './childComponents/RecommendationView';
  // import httpRequest
  import {getBannerImages, getProductsData} from 'api/home' ;

  export default {
    name: "Home",
    components: {
      NavBar,
      TabControl,
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
        currentTag: 'pop'
      }
    },
    methods: {
      /**
       * click listener
       */
      tabClick(index) {
        this.currentTag = Object.keys(this.products)[index]
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
    padding-top: 2.4rem;
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
    
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 2.38rem;
    z-index: 9;
  }
</style>