<template>
  <div class="customerDetail">
    <mt-header fixed title="进货记录">
      <a @click='goto' slot="left">
        <mt-button icon="back">返回</mt-button>
      </a>
    </mt-header>

  </div>
</template>

<script>

  export default {
    name: "customerDetail",
    data() {
      return {
        customerId: ''
      }
    },

    mounted() { //挂载到实例
      this.loadData(); //初次访问查询列表
    },
    methods: { //方法
      goto() {
        this.$router.go(-1);
      },
      loadData: function () {
        console.log(this.$route.query.id)
      }
    }

  }
</script>

<style scoped lang="less">
  @import "./order-list.less";
</style>
