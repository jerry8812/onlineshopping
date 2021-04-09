<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="navbar-left"></slot>
    </div>
    <div class="middle">
      <slot name="navbar-middle"></slot>
    </div>
    <div class="right">
      <slot name="navbar-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    line-height: 2.4rem;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  }

  .left, .right {
    width: 15%;
  }
  
  .middle {
    flex: 1;
    text-align: center;
  }

</style>