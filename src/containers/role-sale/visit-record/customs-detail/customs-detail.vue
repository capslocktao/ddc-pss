<template>
    <div class="customs-detail">
      <mt-header fixed title="客户详情">
        <router-link to="/sale/visitRecord" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button slot="right">编辑</mt-button>
      </mt-header>
      <div class="content" v-if="detailData">
        <mt-cell title="客户名称" :value="detailData.name"></mt-cell>
        <mt-cell title="拜访时间" :value="detailData.time"></mt-cell>
        <mt-cell title="阶段" :value="detailData.status.name"></mt-cell>
        <div class="visit-content">
          <div class="title">沟通内容</div>
          <textarea disabled>{{detailData.content}}</textarea>
        </div>
        <mt-cell title="拜访图片"></mt-cell>
        <div class="img">
          <img :src="detailData.image" alt="">
        </div>

      </div>
    </div>
</template>

<script>
  import axios from 'axios';
    export default {
      name: "customs-detail",
      data(){
        return {
          detailData:""
        }
      },
      mounted(){

        axios.get(`/static/visit-record/customs-detail${this.$route.params.id}.json`).then(res=>{
          if(res.data.result){
            this.detailData = res.data.data

          }
        })
      }
    }
</script>

<style scoped lang="less">
  @import './customs-detail.less';
</style>
