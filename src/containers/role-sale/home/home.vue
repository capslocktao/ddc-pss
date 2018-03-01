<template>
  <div class="sale-home">
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
          currentPath:"/sale/visitRecord",
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
