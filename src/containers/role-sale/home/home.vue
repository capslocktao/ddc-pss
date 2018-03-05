<template>
  <div class="sale-home">
    <div class="sale-view">
      <router-view></router-view>
    </div>
    <div class="sale-tabbar">
      <router-link v-for="v in tabbar" class="sale-tabbar-item" :key="v.path" @click.native="linkTo" :to="v.path">{{v.name}}</router-link>
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
              path:`${this.host}/sale/visitRecord`,
              name:"拜访记录"
            },
            {
              path:`${this.host}/sale/visitPlan`,
              name:"拜访计划"
            },
            {
              path:`${this.host}/sale/potentialClients`,
              name:"意向客户"
            },
            {
              path:`${this.host}/sale/dealCustomer`,
              name:"成交客户"
            },
            {
              path:`${this.host}/sale/personal`,
              name:"我的"
            },
          ]
        }
      },
      created(){
        this.tabbar.forEach(v=>{
          if(window.location.pathname === v.path){
            this.currentPage = v.name;

          }
        });

/*        if(!sessionStorage.getItem("currentPath")){
          this.$router.push('/sale/visitRecord')
        }else{
          this.$router.push(sessionStorage.getItem("currentPath"))
        }*/
      },
      updated(){
        this.tabbar.forEach(v=>{
          if(window.location.pathname === v.path){
            this.currentPage = v.name
          }
        });
        sessionStorage.setItem("currentPath",window.location.pathname)
      },
      mounted(){
      },
      methods:{
        linkTo(e){
          console.log(e.currentTarget)
        }
      },
      computed:{
        currentPath(){
          return window.location.pathname
        },
        isLoading(){
          console.log(this.$store.state.loading.isLoading);
        }
      },


    }
</script>

<style scoped lang="less">
  @import "./home.less";
</style>
