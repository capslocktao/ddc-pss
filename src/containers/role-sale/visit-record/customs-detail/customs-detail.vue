<template>
    <div class="customs-detail">
      <mt-header fixed title="客户详情">
        <router-link to="/sale/visitRecord" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button slot="right">编辑</mt-button>
      </mt-header>
      <div class="content" v-if="detailData">
        <mt-field label="客户名称" placeholder="请输入用户名" class="form-field" :value="detailData.name" ></mt-field>
          <div class="select-time" @click="openPicker">
            <mt-field label="拜访时间" placeholder="请选择时间" class="form-field" v-model="detailData.time" disabled>
            </mt-field>
          </div>
          <mt-datetime-picker
            ref="datePicker"
            type="datetime"
            v-model="dateValue"
            :startDate="startDate"
            @confirm="done"
          >
          </mt-datetime-picker>
        <div class="select-stage" @click="showPicker">
          <mt-field label="阶段" placeholder="请选择阶段" class="form-field" :value="detailData.stage.name" disabled />
        </div>
        <div class="visit-content">
          <div class="title">沟通内容</div>
          <textarea disabled>{{detailData.content}}</textarea>
        </div>
        <mt-cell title="拜访图片"></mt-cell>
        <div class="img">
          <img :src="detailData.image" alt="">
        </div>
      </div>
      <picker :data="thisSlots" :isShowPicker="isShowPicker" @selectCancel="stageCancel" @selectDone="stageSelected"></picker>
    </div>
</template>

<script>
  import picker from "@/components/picker/picker"
  import axios from 'axios';
    export default {
      name: "customs-detail",
      data(){
        return {
          detailData:"",
          dateValue:"",
          startDate:"2016-04-16",
          dateSelected:"",
          isShowPicker:false,
          thisSlots:[{
            values:[
              {
                name:"初次拜访",
                id:"123"
              },
              {
                name:"二次拜访",
                id:"321"
              },
              {
                name:"多次拜访",
                id:"432"
              },
              {
                name:"已签约",
                id:"698"
              }
            ]
          }]
        }
      },
      components:{
        picker
      },
      mounted(){
        console.log(new Date());
        let strTime = "2017-01-01";
        this.startDate= new Date(Date.parse(strTime.replace(/-/g,  "/")))
        axios.get(`/static/visit-record/customs-detail${this.$route.params.id}.json`).then(res=>{
          if(res.data.result){
            this.detailData = res.data.data
          }
        })
      },
      methods:{
        openPicker() {
          this.$refs.datePicker.open();
        },
        showPicker(){
          this.isShowPicker = true
        },
        stageSelected(data){
          this.detailData.stage.name = data.name;
          this.isShowPicker = false
        },
        stageCancel(){
          this.isShowPicker = false
        },
        done(){
          this.detailData.time = this.formatDate(this.dateValue)
        },
        formatDate(now) {
          let year=now.getFullYear();
          let month=now.getMonth()+1;
          let date=now.getDate();
          let hour=now.getHours();
          let minute=now.getMinutes();
          let second=now.getSeconds();
          console.log(year)
          return year+"年"+month+"月"+date+"日  "+hour+"点";
        }
      },
      computed:{
        newData() {
          return this.$store.state.picker.newData
        }
      }
    }
</script>

<style scoped lang="less">
  @import './customs-detail.less';
</style>
