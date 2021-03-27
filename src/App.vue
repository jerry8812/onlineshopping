<template>
  <div id="app">
    {{test}}
  </div>
</template>

<script>

import {request} from './network/request'

export default {
  name: 'App',
  data() {
    return {
      test: ''
    }
  },
  created() {
    request({
      url: '/test/findAll'
    }).then(res => {
      this.test = res.data
    })
  }
}
</script>

<style>

</style>
