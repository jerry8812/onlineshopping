<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Tabbar"
  }
</script>

<style>
  #tabbar {
    display: flex;
    background-color: #f3f3f3;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0px -4px 2px rgba(100, 100, 100, .1);
  }
  
</style>