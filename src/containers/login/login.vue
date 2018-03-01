<template>
    <div class="login">
      <mt-field label="账号" placeholder="请输入账户" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="email"></mt-field>

        <mt-button type="primary" class="login-btn" @click="login">登陆</mt-button>


    </div>
</template>

<script>
  import { Button } from 'iview'
    export default {
        name: "login",
        data(){
          return {
            username:"",
            password:""
          }
        },
      methods:{
        login(){
          this.$router.push('/sale/visitRecord')
        }
      }
    }
</script>

<style lang="less">
  @import './login.less';
</style>
