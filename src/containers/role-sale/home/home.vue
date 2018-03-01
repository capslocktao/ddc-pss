<template>
  <div class="sale-home">
    <mt-header fixed :title="currentPage">

      <mt-button slot="right">新增</mt-button>
    </mt-header>
    <div class="sale-view">
      <router-view></router-view>
    </div>
    <div class="sale-tabbar">
      <router-link v-for="v in tabbar" class="sale-tabbar-item" @click.native="linkTo" :key="v.path" :to="v.path">{{v.name}}</router-link>
    </div>
  </div>

</template>

<script>
    export default {
      name: "home",
      data(){
        return{
          currentPage:"拜访记录",
          tabbar:[
            {
              path:"/sale/visitRecord",
              name:"拜访记录"
            },
            {
              path:"/sale/visitPlan",
              name:"拜访计划"
            },
            {
              path:"/sale/potentialClients",
              name:"意向客户"
            },
            {
              path:"/sale/dealCustomer",
              name:"成交客户"
            },
            {
              path:"/sale/personal",
              name:"我的"
            },
          ]
        }
      },
      created(){
        this.tabbar.forEach(v=>{
          if(window.location.pathname === v.path){
            this.currentPage = v.name
          }
        })
        if(!sessionStorage.getItem("currentPath")){
          this.$router.push('/sale/visitRecord')
        }
      },
      updated(){
        this.tabbar.forEach(v=>{
          if(window.location.pathname === v.path){
            this.currentPage = v.name
          }
        });
        console.log(window.location.pathname);
        sessionStorage.setItem("currentPath",window.location.pathname)
      },
      mounted(){
      },
      methods:{
        linkTo(e){
          e.currentTarget.setAttribute("class","active")
          console.log(e.currentTarget)
        }
      },
      computed:{
        currentPath(){

          return window.location.pathname
        }
      },


    }
</script>

<style scoped lang="less">
  @import "./home.less";
</style>
