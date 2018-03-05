<template>
	<div class="monthlyRefund">
		<mt-header fixed title="日回款">
			<router-link to="/sale/personal/clientRefund" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		<ul class="list">
			<li v-for="(item,index) in data" :key="item.path">
				<router-link :index="index" :to="{path:'/sale/personal/detailRefund',query:{id:item.id}}">
					<p>{{item.name}}</p>
					<div>日回款：{{item.price}}元
						<img src="../../../../assets/more.png" width="10" height="10">
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	var dataJson = [{
			name: "一号",
			price: "1111",
			id: "1"
		},
		{
			name: "二号",
			price: "2222",
			id: "2"
		},
		{
			name: "三号",
			price: "33333",
			id: "3"
		},
		{
			name: "四号",
			price: "4444",
			id: "4"
		},
		{
			name: "五号",
			price: "5555",
			id: "5"
		},
		{
			name: "六号",
			price: "6666",
			id: "6"
		},
		{
			name: "七号",
			price: "7777",
			id: "7"
		}]

	export default {
		name: "clientRefund",
		data() {
			return {
				data: []
			}
		},
		components: { //模板注入

		},
		created() { //实例已经创建完成

		},

		updated() { //虚拟 DOM 重新渲染

		},
		mounted() { //挂载到实例

			//			this.$http.get(this.serverUrl+'/aaaa', {
			//					params: {
			//						id: this.$route.query.id,
			//						page:this.page
			//					}
			//				})
			//				.then(function(response) {
			this.data = dataJson;
			//				})
			//				.catch(function(response) {
			//					console.log(response);
			//				});
		},
		methods: { //方法

		},
		computed: { //计算属性

		},
		watch: {

		}

	}
</script>

<style scoped lang="less">
	@import "./monthly-refund.less";
</style>
