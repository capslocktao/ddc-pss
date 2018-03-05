<template>
	<div class="clientRefund">
		<mt-header fixed title="客户回款">
			<router-link to="/sale/personal" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		<div class="content">
			<div class="filter">
				<div @click="showPicker(slotsYear,'year')">{{year}}
					<img src="../../../../assets/xiala.png" width="10" height="10">
				</div>
				<div @click="showPicker(slotsStore,'store')">{{store}}
					<img src="../../../../assets/xiala.png" width="10" height="10">
				</div>
				<mt-button size="small" type="primary" @click.native="handleClick">搜索</mt-button>

			</div>
			<ul class="list">
				<li v-for="item in data" :key="item.path">
					<router-link :to="{path:'/sale/personal/monthlyRefund',query:{id:item.id}}">
						<p>{{item.name}}</p>
						<div>月回款：{{item.price}}元
							<img src="../../../../assets/more.png" width="10" height="10">
						</div>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="total">
			<span>
	年度回款总额：{{total}}元

	</span>

		</div>

		<picker :data="thisSlots" :isShowPicker="isShowPicker"></picker>
	</div>
</template>

<script>
	var dataJson=[{
						name: "一月",
						price: "1111",
						id: "1"
					},
					{
						name: "二月",
						price: "2222",
						id: "2"
					},
					{
						name: "三月",
						price: "33333",
						id: "3"
					},
					{
						name: "四月",
						price: "4444",
						id: "4"
					}
				]
	import picker from "@/components/picker/picker";

	export default {
		name: "clientRefund",
		data() {
			return {
				slotsYear: [{
					values: [{
						"name": '1990',
						"id": 1
					}, {
						"name": '1991',
						"id": 2
					}]
				}],
				slotsStore: [{
					values: [{
						"name": '北京',
						"id": 1
					}, {
						"name": '上海',
						"id": 2
					}]
				}],
				data: [],
				total: '',
				thisSlots: null,
				isShowPicker: false,
				year: null,
				store: null,
				strName: null
			}
		},
		components: { //模板注入
			picker
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
			this.year = this.slotsYear[0].values[0].name; //初始化年份
			this.store = this.slotsStore[0].values[0].name; //初始化店铺
			this.total = 1000;
			//				})
			//				.catch(function(response) {
			//					console.log(response);
			//				});
		},
		methods: { //方法
			showPicker(data, strName) { //Picker显示 带入数据和当前对象的字段
				this.isShowPicker = true; //传入组件的数据的改变
				this.thisSlots = data;
				this.strName = strName;
			}
		},
		computed: { //计算属性
			newData() {
				return this.$store.state.picker.newData
			}
		},
		watch: {
			newData: function(val, oldval) {
				var newData = this.$store.state.picker.newData
				console.log(newData)
				this[this.strName] = newData.name;
				this.isShowPicker = false;
			}
		}

	}
</script>

<style scoped lang="less">
	@import "./client-refund.less";
</style>
