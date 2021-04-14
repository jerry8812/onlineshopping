<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="navbar-middle">Shopping Mall</div>
    </nav-bar>
    <b-carousel>
      <b-carousel-slide v-for="(image, index) in this.banners" :key="index" :img-src="image.url"></b-carousel-slide>
    </b-carousel>
    <recommendation-view :recommendations="recommendations"></recommendation-view>
  </div>
</template>

<script>

  import NavBar from "components/common/navbar/NavBar";
  import recommendationView from './childComponents/RecommendationView';
  import {getBannerImages, getRecommendationImages} from 'api/home' ;

  export default {
    name: "Home",
    components: {
      NavBar,
      recommendationView
    },
    data() {
      return {
        banners: [],
        recommendations: []
      }
    },
    created() {
      getBannerImages().then(res => {
        this.banners = res.data
      }),
      getRecommendationImages().then(res => {
        this.recommendations = res.data
      })
    }
  }
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
    font-size: 1rem;
  }
</style>