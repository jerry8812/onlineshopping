<template>
  <div id="slider">
    <b-carousel controls indicators img-width="100%">
      <b-carousel-slide v-for="(url, index) in this.banner" :key="index" :img-src=url></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    name: 'Slider',
    props: {
      banner: {
        type: Array,
        default: []  
      }
    }
  }

</script>

<style>

</style>