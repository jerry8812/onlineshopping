<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="navbar-middle">Shopping Mall</div>
    </nav-bar>

    <slider :banner="this.banner"></slider>
  </div>
</template>

<script>

  import NavBar from "components/common/navbar/NavBar"
  import Slider from "components/common/slider/Slider"
  import {getBanner} from 'api/home' 

  export default {
    name: "Home",
    components: {
      NavBar,
      Slider
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