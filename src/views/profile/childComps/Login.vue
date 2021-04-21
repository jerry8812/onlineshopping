<template>
  <div id="login">
    <b-form class="login-form">
      <div class="form-header">
        <span>Login to purchase products, add to your 
          wishlist and follow your favourite brands!</span>
      </div>
      <b-form-group id="input-group-email" label="Email" label-for="input-email">
        <b-form-input id="input-email" 
                      v-model="loginForm.email" 
                      type="email"
                      placeholder="Enter Email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="input-group-password" label="Password" label-for="input-passsword">
        <b-form-input id="input-passsword" 
                      v-model="loginForm.email" 
                      type="password"
                      placeholder="Enter your password">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" class="login-btn">LOGIN</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        loginForm: {
          email: '',
          password: ''
        },
      }
    }
  }
</script>

<style>

</style>