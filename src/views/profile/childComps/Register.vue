<template>
  <div id="register">
    <b-form class="register-form">
      <div class="form-header">
        <span>Create an account to make purchases, 
          create wishlists and follow your favourite brandss!</span>
      </div>
      <!-- email -->
      <b-form-group id="input-group-register-email" label="Email" label-for="input-register-email">
        <b-form-input id="input-register-email" 
                      v-model="registerForm.email" 
                      type="email"
                      placeholder="Enter Email">
        </b-form-input>
      </b-form-group>
      <!-- password -->
      <b-form-group id="input-group-register-password" 
                    label="Password" 
                    label-for="input-register-passsword">
        <b-form-input id="input-register-passsword" 
                      v-model="registerForm.email" 
                      type="password"
                      placeholder="Enter your password">
        </b-form-input>
      </b-form-group>
      <!-- firstName -->
      <b-form-group id="input-group-register-firstName" 
                    label="First Name" 
                    label-for="input-register-firstName">
        <b-form-input id="input-register-firstName" 
                      v-model="registerForm.firstName" 
                      type="text"
                      placeholder="Enter first name">
        </b-form-input>
      </b-form-group>
      <!-- lastName -->
      <b-form-group id="input-group-register-lastName" 
                    label="Last Name" 
                    label-for="input-register-lastName">
        <b-form-input id="input-register-lastName" 
                      v-model="registerForm.lastName" 
                      type="text"
                      placeholder="Enter Last Name">
        </b-form-input>
      </b-form-group>
      <!-- dateOfBirth -->
      <b-form-group id="input-group-register-birthday" 
                    label="Birthday" 
                    label-for="input-register-birthday">
        <b-form-datepicker id="input-register-birthday"
                           v-model="registerForm.dob"
                           class="mb-2"
                           locale="en"
                           placeholder="Choose a date">
        </b-form-datepicker>
      </b-form-group>
      <b-form-checkbox
        id="register-checkbox"
        v-model="checkboxStatus"
        name="checkbox-1"
        value="true"
        unchecked-value="false"
        class="checkbox-text">
        Sign up for LADY CLOTHING news and get a $20 voucher for your next
        purchase. You'll receive sales alerts, exclusive offers and the latest
        on trends.
      </b-form-checkbox>
      <b-button type="submit" variant="primary" class="login-btn">CREATE ACCOUNT</b-button>
    </b-form>
  </div>
</template>

<script>  
  export default {
    name: 'Register',
    data() {
      return {
        registerForm: {
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          dob: new Date()
        },
        checkboxStatus: false
      }
    }
  }
</script>

<style>
  .checkbox-text {
    font-size: 14px;
    color: rgb(107, 106, 106);
  }
</style>