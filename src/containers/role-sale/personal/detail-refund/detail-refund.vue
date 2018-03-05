<template>
	<div class="detailRefund">

		<div class="content">
			<mt-loadmore :bottom-method="loadBottom" :bottomDistance='bottomDistance' :bottom-all-loaded="allLoaded" ref="loadmore">
				<ul v-for="(item,index) in pageList">
					<li>
						<div>{{item.name}}</div>
						<p>应回款：19000元</p>
					</li>
					<li>
						<div>红红母婴单</div>
						<p>已回款：19000元</p>
					</li>
					<li>
						<div>今日回款：1000元</div>
						<p>同期比（每月的回款比）：50%</p>
					</li>
				</ul>
			</mt-loadmore>
		</div>
	</div>
</template>

<script>
	var data = [{
		name: 1
	}, {
		name: 1
	}, {
		name: 1
	}, {
		name: 1
	}]
	export default {
		name: "detailRefund",
		data() {
			return {
				pageNum:1,
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
			this.loadPageList(this.pageNum); //初次访问查询列表
		},
		methods: { //方法
			goBack() {
				this.$router.go(-1);
			},
			loadBottom: function() {
				// 上拉加载
				this.pageNum+=1;
				this.loadPageList();
				this.$refs.loadmore.onBottomLoaded(); // 固定方法，查询完要调用一次，用于重新定位
			},
			loadPageList() {

				this.pageList = this.pageList.concat( data )
//				this.$http.get(this.serverUrl + '/aaaa', {
//						params: {
//							id: this.$route.query.id,
//							page: this.pageNum
//						}
//					})
//					.then(function(response) {
//						if(response.code==0){
//							this.data=response.data
////							this.allLoaded = false;   //如果没有数据为false
//						}
//					})
//					.catch(function(response) {
//						console.log(response);
//					});
			}
		},
		computed: { //计算属性

		},
		watch: {

		}

	}
</script>

<style scoped lang="less">
	@import "./detail-refund.less";
</style>
