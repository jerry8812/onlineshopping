<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="navbar-middle">Shopping Mall</div>
    </nav-bar>

    <b-carousel controls indicators img-width="100%">
      <b-carousel-slide img-src="https://picsum.photos/1024/488/?image=10"></b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/488/?image=11"></b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/488/?image=12"></b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/488/?image=13"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>

  import NavBar from "components/common/navbar/NavBar"
  import {getTestData} from 'api/home' //for testing

  export default {
    name: "Home",
    components: {
      NavBar
    },
    created() {
      getTestData().then(res => {
        console.log(res);
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