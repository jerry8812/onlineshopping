<template>
  <div class="scroll-top">
    <img src="~assets/image/common/top.png" alt="back to top image">
  </div>
</template>

<script>
  export default {
    name: 'ScrollTop'
  }
</script>

<style>
  .scroll-top {
    position: fixed;
    right: 7px;
    bottom: 55px;
    cursor: pointer;
  }
  .scroll-top img {
    width: 43px;
    height: 43px;
  }
</style>