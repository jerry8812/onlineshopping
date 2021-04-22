<template>
  <div id="register">
    <b-form @submit.prevent="onsubmit" novalidate>
      <div class="form-header">
        <span>Create an account to make purchases, 
          create wishlists and follow your favourite brandss!</span>
      </div>
      <!-- email -->
      <b-form-group label="Email">
        <b-form-input type="email"
                      placeholder="Enter Email"
                      class="form-control"
                      @input="delayTouch($v.registerForm.email)"
                      v-model.trim="registerForm.email" 
                      :class="{'is-invalid': $v.registerForm.email.$error,
                               'is-valid': !$v.registerForm.email.$invalid}">
        </b-form-input>
        <div class="invalid-feedback">
          <span v-if="!$v.registerForm.email.required && $v.registerForm.email.$dirty">Email is required</span>
          <span v-if="!$v.registerForm.email.email">Please enter correct email address</span>
          <span v-if="!$v.registerForm.email.isUnique">The email is already registered</span>
        </div>
      </b-form-group>
      <!-- password -->
      <b-form-group label="Password">
        <b-form-input v-model.trim="registerForm.password" 
                      id="register-password"
                      type="password"
                      placeholder="Enter your password"
                      class="form-control"
                      @input="delayTouch($v.registerForm.password)"
                      :class="{'is-invalid': $v.registerForm.password.$error,
                               'is-valid': !$v.registerForm.password.$invalid}">
        </b-form-input>
        <div class="invalid-feedback">
          <span v-if="!$v.registerForm.password.required && $v.registerForm.password.$dirty">Password is required</span>
          <span v-if="!$v.registerForm.password.minLength">{{$v.registerForm.password.$params.minLength.min}} characters minimum.</span>
        </div>
      </b-form-group>
      <!-- repeatpassword -->
      <b-form-group label="Repeat Password">
        <b-form-input v-model.trim="registerForm.repeatpassword" 
                      type="password"
                      id="register-repeatpassword"
                      class="form-control"
                      @input="delayTouch($v.registerForm.repeatpassword)"
                      :class="{'is-invalid': $v.registerForm.repeatpassword.$error,
                               'is-valid': (registerForm.password != '') ? !$v.registerForm.repeatpassword.$invalid: ''}">
        </b-form-input>
        <div class="invalid-feedback">
          <span v-if="!$v.registerForm.repeatpassword.sameAsPassword">Passwords must be identical.</span>
        </div>
      </b-form-group>
      <!-- firstName -->
      <b-form-group label="First Name">
        <b-form-input 
          class="form-control"
          type="text"
          placeholder="Enter first name"
          @input.native="delayTouch($v.registerForm.firstName)"
          v-model.trim="registerForm.firstName"
          :class="{'is-invalid': $v.registerForm.firstName.$error,
                   'is-valid': !$v.registerForm.firstName.$invalid}">
        </b-form-input>
        <div class="invalid-feedback">
          <span v-if="!$v.registerForm.firstName.required">First name is required</span>
        </div>
      </b-form-group>
      <!-- lastName -->
      <b-form-group label="Last Name">
        <b-form-input type="text"
                      placeholder="Enter Last Name"
                      class="form-control"
                      @input.native="delayTouch($v.registerForm.lastName)"
                      v-model.trim="registerForm.lastName" 
                      :class="{'is-valid': !$v.registerForm.lastName.$invalid,
                               'is-invalid': $v.registerForm.lastName.$error,}">
        </b-form-input>
        <div class="invalid-feedback">
          <span v-if="!$v.registerForm.lastName.required">Last name is required</span>
        </div>
      </b-form-group>
      <!-- dateOfBirth -->
      <b-form-group label="Birthday">
        <b-form-datepicker v-model="registerForm.dob"
                           class="mb-2"
                           locale="en"
                           placeholder="Choose a date"
                           @input.native="delayTouch($v.registerForm.dob)"
                           :class="{'is-valid': !$v.registerForm.dob.$invalid,
                                    'is-invalid': $v.registerForm.dob.$error}">
        </b-form-datepicker>
        <div class="invalid-feedback">
          <span v-if="!$v.registerForm.dob.required">Birthday is required</span>
        </div>
      </b-form-group>
      <!-- gender -->
      <b-form-group label="Gender" v-slot="{ ariaDescribedby }">
        <b-form-radio-group
          :aria-describedby="ariaDescribedby"
          @input.native="delayTouch($v.registerForm.gender)"
          v-model.trim="registerForm.gender" 
          :class="{'is-invalid': $v.registerForm.gender.$error}"
        >
          <b-form-radio value="male">Male</b-form-radio>
          <b-form-radio value="female">Female</b-form-radio>
        </b-form-radio-group>
        <div class="invalid-feedback">
          <span v-if="!$v.registerForm.gender.required">Gender is required</span>
        </div>
      </b-form-group>

      <!-- checkbox -->
      <b-form-checkbox
        v-model.trim="checkboxStatus"
        value="true"
        unchecked-value="false"
        class="checkbox-text"
        @input.native="delayTouch($v.checkboxStatus)"
        :class="{'is-invalid': $v.checkboxStatus.$error}"
      >
        Sign up for LADY CLOTHING news and get a $20 voucher for your next
        purchase. You'll receive sales alerts, exclusive offers and the latest
        on trends.
      </b-form-checkbox>
      <div class="invalid-feedback">
          <span v-if="!$v.checkboxStatus.required && $v.checkboxStatus.$dirty">Accept terms is required</span>
      </div>
      <b-button variant="primary" class="login-btn">CREATE ACCOUNT</b-button>
    </b-form>
  </div>
</template>

<script>
  // import debounce from 'util/util'
  import {getUserByEmail} from 'api/category.js'
  import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

  const touchMap = new WeakMap()
  export default {
    name: 'Register',
    data() {
      return {
        registerForm: {
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          repeatpassword: '',
          dob: new Date(),
          gender: ''
        },
        checkboxStatus: '',
        submitStatus: ''
      }
    },
    methods: {
      delayTouch($v) {
        $v.$reset()
        if (touchMap.has($v)) {
          clearTimeout(touchMap.get($v))
        }
        touchMap.set($v, setTimeout($v.$touch, 800))
      },
      onsubmit(e) {
        e.preventDefault()
        this.$v.$touch()
        if(this.$v.$invalid) {
          this.submitStatus = "ERROR"
        }else {
          this.submitStatus = "PENDING"
        }
      }
    },
    validations: {
      registerForm: {
        firstName:{
          required
        },
        lastName: {
          required
        },
        email: {
          required,
          email,
          async isUnique (value) {
            if (value === '') return true
            // var email_regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|
            // (\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            const res = await getUserByEmail(value)
            return !Boolean(res.data)
          }
        },
        password: {
          required,
          minLength: minLength(8),
        },
        repeatpassword: {
          sameAsPassword: sameAs('password')
        },
        dob: {
          required
        },
        gender: {
          required
        }
      },
      checkboxStatus: {
        required
      }
    },
    
  }
</script>

<style>
  .checkbox-text {
    font-size: 14px;
    color: rgb(107, 106, 106);
    padding-top: 5px;
  }
</style>