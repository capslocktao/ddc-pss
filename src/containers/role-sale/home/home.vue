<template>
  <div class="sale-home">
    <mt-header fixed :title="currentPage">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <router-view></router-view>
    <div class="sale-tabbar">
      <router-link v-for="v in tabbar" class="sale-tabbar-item"  :key="v.path" :to="v.path">{{v.name}}</router-link>
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
      },
      updated(){
        this.tabbar.forEach(v=>{
          if(window.location.pathname === v.path){
            this.currentPage = v.name
          }
        })

        sessionStorage.setItem("currentPath",window.location.pathname)
      },
      mounted(){



      },
      methods:{

      },
      computed:{

      }

    }
</script>

<style scoped lang="less">
  @import "./home.less";
</style>
