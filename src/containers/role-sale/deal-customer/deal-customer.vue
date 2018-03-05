<template>
  <div class="deal-customer">
    <mt-header fixed title="成交客户"/>
    <div class="content">
      <mt-loadmore :bottom-method="loadBottom" :auto-fill="false" :bottomDistance='bottomDistance'
                   :bottom-all-loaded="allLoaded" ref="loadmore">

        <p v-for="(item,index) in pageList">
          <router-link :index="index" :to="{path:'/sale/dealCustomerChild/customerDetail',query:{id:item.id}}">

            <mt-cell :title="item.name" label="15377463642">
              <span>成交金额：<span class="red">2000</span></span>
            </mt-cell>
          </router-link>

        </p>
      </mt-loadmore>


    </div>
  </div>
</template>

<script>
  var data = [{
    name: "1",
    id: 1
  }, {
    name: "2",
    id: 2
  }, {
    name: "3",
    id: 3
  }, {
    name: "1",
    id: 1
  }, {
    name: "1",
    id: 1
  }, {
    name: "1",
    id: 1
  }, {
    name: "1",
    id: 1
  }, {
    name: "1",
    id: 1
  }, {
    name: "1",
    id: 1
  }]
  export default {
    name: "deal-customer",
    data() {
      return {
        pageNum: 1,
        bottomDistance: 10,
        allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
        scrollMode: "auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
        pageList: []
      }
    },
    components: { //模板注入
    },
    created() { //实例已经创建完成

    },

    updated() { //虚拟 DOM 重新渲染

    },

    mounted() { //挂载到实例
      this.loadPageList(); //初次访问查询列表
    },
    methods: { //方法

      loadBottom: function () {
        // 上拉加载
        this.pageNum += 1;
        this.loadPageList();
        this.$refs.loadmore.onBottomLoaded(); // 固定方法，查询完要调用一次，用于重新定位
      },
      loadPageList() {
        if (this.pageNum >= 3) {
          this.allLoaded = true;   //如果没有数据为false
        } else {
          this.pageList = this.pageList.concat(data)

        }

//				this.$http.get(this.serverUrl + '/aaaa', {
//						params: {
//							id: this.$route.query.id,
//							page: this.pageNum
//						}
//					})
//					.then(function(response) {
//						if(response.code==0){
//							this.data=response.data
////							this.allLoaded = true;   //如果没有数据为true 则不加载
//						}
//					})
//					.catch(function(response) {
//						console.log(response);
//					});
      }
    }

  }
</script>

<style scoped lang="less">
  @import "./deal-customer.less";
</style>
