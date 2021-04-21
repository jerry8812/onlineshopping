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

  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Kurale&display=swap');

  .nav-bar {
    display: flex;
    line-height: 2.7rem;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    text-align: center;
    background-color: var(--color-tint);
    color: rgb(255, 255, 255);

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    
    z-index: 999;
  }

  .left, .right {
    width: 18%;
    padding-left: 0;
  }
  
  .middle {
    flex: 1;
    text-align: center;
    margin-bottom: 2px;
    font-family: 'Kurale', serif;
    /* font-family: 'Dancing Script', cursive; */
    font-size: 1.44rem;
  }
</style>