<template>
  <div class="customerDetail">
    <mt-header fixed title="订单记录">
      <a @click='goto' slot="left">
        <mt-button icon="back">返回</mt-button>
      </a>
    </mt-header>
    <div class="content">
    </div>
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
      this.loadData()
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
  @import "./purchase-list.less";
</style>
