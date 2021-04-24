<template>
  <div id="login">
    <b-form class="login-form" @submit.prevent="login" novalidate>
      <div class="form-header">
        <span>Login to purchase products, add to your 
          wishlist and follow your favourite brands!</span>
      </div>
      <b-form-group label="Email">
        <b-form-input v-model.trim="user.email" 
                      type="email"
                      placeholder="Enter email address"
                      :class="{'is-invalid': $v.user.email.$error}"
                      >
        </b-form-input>
        <div class="invalid-feedback">
          <span v-if="!$v.user.email.required && $v.user.email.$dirty">Email is required</span>
        </div>
      </b-form-group>
      <b-form-group label="Password" :class="{'login-password': isLoginFailed}">
        <b-form-input v-model.trim="user.password" 
                      type="password"
                      placeholder="Enter your password"
                      :class="{'is-invalid': $v.user.password.$error}"
                      >
        </b-form-input>
        <div class="invalid-feedback">
          <span v-if="!$v.user.password.required && $v.user.password.$dirty">Email is required</span>
        </div>
      </b-form-group>
      <div class="login-failed-message" v-show="isLoginFailed">
        <p>{{this.errorMessage}}</p>
      </div>
      <button class="login-btn" @click="login">LOGIN</button>
    </b-form>
  </div>
</template>

<script>
  import {loginByEmail} from "api/profile"
  import { required } from 'vuelidate/lib/validators'
  export default {
    name: 'Login',
    data() {
      return {
        user: {
          email: '',
          password: ''
        },
        errorMessage: '',
        isLoginFailed: false 
      }
    },
    validations: {
      user: {
        email: {
          required
        },
        password: {
          required
        }
      }
    },
    methods: {
      login() {
        this.$v.$touch()
        if(this.$v.$invalid) {
          return
        }else {
          loginByEmail(this.user).then(res => {
            if(res.code == 404) {
              this.errorMessage = res.message
              this.isLoginFailed = true
            } else {
              this.$router.push("/home")
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  .login-failed-message {
    color: white;
    text-align: center;
    font-size: 15px;
    background-color: rgb(200, 31, 31);
    line-height: 37px;
    border-radius: 5px;  
  }
  .login-password {
    margin-bottom: 0;
  }
</style>