<template>
  <div id="app">
    <router-view></router-view>
    <main-tabbar/>
  </div>
</template>

<script>
import MainTabbar from "components/content/mainTabBar/MainTabbar";

export default {
  name: "App",
  data() {
    return {
    }
  },
  components: {
    MainTabbar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
