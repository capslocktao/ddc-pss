<template>
  <div id="app">
    <router-view></router-view>
    <login v-if="isLogin"></login>
  </div>
</template>

<script>
import Login from './containers/login/login';
export default {
  name: 'App',
  data(){
    return {
      isLogin:false
    }
  },
  mounted(){
    this.$router.push('/sale/visitRecord')
  },
  components:{
    Login
  }
}
</script>

<style>

</style>
