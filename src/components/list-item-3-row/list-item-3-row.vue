<template>
    <router-link :to="{path:`${to}/${data.id}`}" class="list-item-3-row">
      <div class="left">
        <h3 class="title">
          {{data.title}}
        </h3>
        <div class="name">
          <span class="label">[{{data.label}}]</span><span>{{data.name}}</span>
        </div>
        <div class="time">{{`${record?"拜访时间":"计划时间"}`}}：{{data.time}}</div>
      </div>
      <div class="right">
        >
      </div>
    </router-link>
</template>

<script>
    export default {
      name: "list-item-3-row",
      props:{
          data:{
            type:Object,
            required:true
          },
          record:{
            type:Boolean,
            required:false
          },
          to:{
            type:String,
            required:true
          }
      },
      mounted(){

      }

    }
</script>

<style lang="less" scoped>
@import "./list-item-3-row.less";
</style>
