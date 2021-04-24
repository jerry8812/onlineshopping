<template>
  <div id="loginRegister">
    <div class="login-register-tabs">
      <div id="login-tab" class="login-register-tabs-item" 
           @click="currentTab = true" :class="{loginactive: this.currentTab}">
        <span>LOGIN</span>
      </div>
      <div id="register-tab" class="login-register-tabs-item" 
          @click="currentTab = false" :class="{loginactive: !this.currentTab}">
        <span>CREATE ACCOUNT</span>
      </div>
    </div>
    <login v-if="this.currentTab"></login>
    <register v-else></register>
  </div>
</template>

<script>

  import Login from './Login.vue'
  import Register from './Register.vue'

  export default {
    components: { Login, Register },
    name: 'LoginRegister',
    methods: {
      
    },
    data() {
      return {
        currentTab: true
      }
    }
  }
</script>

<style>
  #loginRegister {
    font-family: Proxima Bova !important;
    padding-top: 4.3rem;
    width: 94%;
    margin: 0 auto;
  }
  .login-register-tabs{
    display: flex;
    justify-content: center;
  }
  .login-register-tabs-item {
    width: 100%;
    color: rgb(14, 13, 13);
    font-size: 14px;
    font-weight: 600;
    border: 1px solid rgb(212, 209, 209);
    line-height: 2.8rem;
    text-align: center;
    flex: 0 1 auto;
  }

  .form-header {
    font-size: 12px;
    margin-top: 1.6em;
    padding-bottom: 1.6em;
    color: rgb(107, 106, 106);
  }

  .login-btn {
    margin-top: 15px;
    width: 100%;
    background-color: #42abc8;
    line-height: 37px;
    border-radius: 3px;
    border-color: #42abc8;
    color: white;
  }
  .loginactive {
    color: #42abc8;
    border-bottom: 2px solid #42abc8;
  }
</style>