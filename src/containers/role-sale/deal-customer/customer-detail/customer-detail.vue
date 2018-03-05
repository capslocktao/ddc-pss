<template>
  <div class="customerDetail">
    <mt-header fixed title="客户详情">
      <router-link to="/sale/dealCustomer" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <table border="1">
        <tr>
          <th>客户名称</th>
          <th>便利店</th>
        </tr>
        <tr>
          <th>区域</th>
          <th>便利店</th>
        </tr>
        <tr>
          <th>联系人</th>
          <th>便利店</th>
        </tr>
        <tr>
          <th>联系电话</th>
          <th>便利店</th>
        </tr>
        <tr>
          <th>地址</th>
          <th>便利店</th>
        </tr>
        <tr>
          <th>首次进货地点</th>
          <th>便利店</th>
        </tr>
        <tr>
          <th>客户欠款</th>
          <th>便利店</th>
        </tr>
        <tr>
          <th>账户余额</th>
          <th>便利店</th>
        </tr>
        <tr>
          <th>总订货量金额</th>
          <th>便利店</th>
        </tr>
        <tr>
          <th>总回数</th>
          <th>便利店</th>
        </tr>
        <tr>
          <th>进货记录</th>
          <th>
            <router-link :to="{path:'/sale/dealCustomerChild/purchaseList',query: {id:customerId}}" slot="left">
              查看记录
              <img src="../../../../assets/more.png" width="10" height="10">
            </router-link>

          </th>
        </tr>
        <tr>
          <th>订货记录</th>
          <th>
            <router-link :to="{path:'/sale/dealCustomerChild/orderList',query: {id:customerId}}" slot="left">
              查看记录
              <img src="../../../../assets/more.png" width="10" height="10">
            </router-link>
          </th>
        </tr>
      </table>
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
      this.loadData(); //初次访问查询列表
      this.customerId=this.$route.query.id;
    },
    methods: { //方法

      loadData: function () {

      }
    }

  }
</script>

<style scoped lang="less">
  @import "./customer-detail.less";
</style>
