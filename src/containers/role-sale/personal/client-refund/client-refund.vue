<template>
	<div class="clientRefund">
		<mt-header fixed title="客户回款">
			<router-link :to="{path:`${this.host}/sale/personal`}" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		<div class="content" v-if="year">
			<div class="filter">
				<div @click="showPickerYear">{{year.name}}
					<img src="../../../../assets/xiala.png" width="10" height="10">
				</div>
				<div @click="showPickerCity">{{city.name}}
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
		<picker :data="slotsYear" :isShowPicker="isShowPickerYear" @selectCancel="stageCancel" @selectDone="stageSelectedYear"></picker>
		<picker :data="slotsCity" :isShowPicker="isShowPickerCity" @selectCancel="stageCancel" @selectDone="stageSelectedCity"></picker>
	</div>
</template>

<script>
	var dataJson=[
	  {
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
				slotsCity: [{
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

        isShowPickerCity: false,
        isShowPickerYear: false,
				year: null,
        city: null,

			}
		},
		components: { //模板注入
			picker
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
			this.year = {
			  name:"1990",
        id:"1"
      }; //初始化年份
			this.city = {
			  name:"北京",
        id:"1"
      }; //初始化店铺
			this.total = 1000;
			//				})
			//				.catch(function(response) {
			//					console.log(response);
			//				});
		},
		methods: { //方法
			showPickerYear() {
				this.isShowPickerYear = true;
			},
      stageSelectedYear(data){
        this.isShowPickerYear = false;
        this.year = data
      },
      showPickerCity(){
        this.isShowPickerCity = true
      },
      stageSelectedCity(data){
        this.isShowPickerCity = false;
        this.city = data
      },
      stageCancel(){
        this.isShowPickerYear = false;
        this.isShowPickerCity = false
      }
    },
		computed: { //计算属性
			newData() {
				return this.$store.state.picker.newData
			}
		},
		watch: {
			newData: function(val, oldval) {
				let newData = this.$store.state.picker.newData;
				this[this.strName] = newData.name;
				this.isShowPicker = false;
			}
		}

	}
</script>

<style scoped lang="less">
	@import "./client-refund.less";
</style>
