<template>
  <div id="profile">
    <nav-bar>
      <div slot="navbar-left" @click="backClick" class="profile-nav-bar">
        <div class="navbar-left-item">
          <img src="~assets/image/common/left-arrow.png">
        </div>
        <div class="navbar-left-item"><span>Back</span></div>
      </div>
      <div slot="navbar-middle" >LADY CLOTHING</div>
    </nav-bar>
    <scroll class="profile_scroll_content"
            :probe-type="3">
      <login-register></login-register>
    </scroll>
  </div>
</template>

<script>
  import LoginRegister from './childComps/LoginRegister.vue';
  
  import Scroll from 'components/common/scroll/Scroll'
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "Profile",
    components: {
      NavBar,
      LoginRegister,
      Scroll
    },
    methods: {
      backClick() {
        console.log("back");
        this.$router.back()
      }
    }
  }

</script>

<style scoped>
  #profile {
    height: 100vh;
  }
  .profile-nav-bar {
    display: flex;
  }

  .navbar-left-item {
    flex: 1;
    flex-basis: 0;
    flex-grow: 1;
  }
  .profile-nav-bar img{
    margin-bottom: 2px;
    margin-left: 9px;
    width: 1rem;
  }
  .profile_scroll_content {
    height: calc(100% - 48px);
    overflow: hidden;
  }
</style>