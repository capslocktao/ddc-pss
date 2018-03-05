<template>
  <div id="app">
    <router-view></router-view>
    <login v-if="isLogin"></login>
    <div class="loading" v-if="this.$store.state.loading.isLoading">
      <mt-spinner type="triple-bounce" color="#FF9D37"></mt-spinner>
    </div>
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
  components:{

  },
  mounted(){

  },
  components:{
    Login
  },
  computed:{

  }
}
</script>

<style scoped>
  #app{
    height: 100%;
  }
  .loading{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
