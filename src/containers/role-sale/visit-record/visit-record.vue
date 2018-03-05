<template>
  <div class="visit-record">
    <mt-header fixed title="拜访记录">
      <mt-button slot="right">新增</mt-button>
    </mt-header>
    <div class="search-box">
      <input type="text">
      <div>搜索</div>
    </div>
    <div class="list-wrapper">
      <listItem3Row v-for="v in recordData" :data="v" :key="v.id" :record="true"/>
    </div>

  </div>
</template>

<script>
  import listItem3Row from "../../../components/list-item-3-row/list-item-3-row";
    export default {
      name: "visit-record",
      components:{
        listItem3Row
      },
      data(){
        return {
          recordData:[
            {
              title:"税赋客户加盟并进货",
              label:"客户",
              name:"红红便利店",
              time:"2017年7月22日 16:30",
              id:"2"
            },
            {
              title:"税赋客户加盟并进货",
              label:"客户",
              name:"红红便利店",
              time:"2017年7月22日 16:30",
              id:"3"
            },
            {
              title:"税赋客户加盟并进货",
              label:"客户",
              name:"红红便利店",
              time:"2017年7月22日 16:30",
              id:"4"
            }

          ]
        }
      }
    }
</script>

<style lang="less" scoped>
  @import "./visit-record.less";
</style>
