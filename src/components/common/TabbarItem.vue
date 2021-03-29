<template>
  <div class="tabbarItem" @click="barItemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabbarItem",
    computed: {
      isActive() {
        return this.$route.path == this.path
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    props: {
      path: {
        type: String
      },
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    methods: {
      barItemClick() {
        this.$router.replace(this.path).catch(err => err)
      }
    }
  }
</script>

<style>
  .tabbarItem {
    flex: 1;
    text-align: center;
    height: 2.9rem;
    font-size: 13px;
    color:rgb(51, 47, 47);
  }

  .tabbarItem img {
    width: 1.6rem;
    height: 1.6rem;
    margin-top: 2px;
    vertical-align: middle;
    margin-bottom: 3px;
  }

</style>