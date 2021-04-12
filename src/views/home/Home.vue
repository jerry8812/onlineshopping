<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="navbar-middle">Shopping Mall</div>
    </nav-bar>

    <b-carousel controls indicators img-width="100%">
      <b-carousel-slide v-for="(url, index) in this.banner" :key="index" :img-src=url></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>

  import NavBar from "components/common/navbar/NavBar"
  import {getBanner} from 'api/home' 

  export default {
    name: "Home",
    components: {
      NavBar
    },
    data() {
      return {
        banner: []
      }
    },
    created() {
      getBanner().then(res => {
        this.banner = res.data
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