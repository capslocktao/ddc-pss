<template>
	<div class="clientRefund">
		<mt-header fixed title="客户回款">
			<router-link to="/sale/personal" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		<div class="content">
			<div class="filter">
				<div @click="showPicker(slots)">{{year}}
					<img src="../../../../assets/xiala.png" width="10" height="10">
				</div>
				<div>2019
					<img src="../../../../assets/xiala.png" width="10" height="10">
				</div>
				<mt-button size="small" type="primary" @click.native="handleClick">搜索</mt-button>

			</div>
			<ul class="list">
				<li v-for="item in listUrl" :key="item.path">
					<!--<mt-cell :title="item.name" is-link :to="item.path">
						<span>总收入</span>
						<img slot="icon" :src="item.icon" width="16" height="16">
					</mt-cell>-->
					<p>1月</p>
					<div>月回款：111元
						<img src="../../../../assets/more.png" width="10" height="10">
					</div>
				</li>
			</ul>
		</div>

		<mt-popup v-model="isShowPicker" position="bottom">
			<div class="picker">
				<div class="pickerTop">
					<div>取消</div>
					<div @click="handleConfirm">确认</div>
				</div>
				<mt-picker :slots="thisSlots" @change="onValuesChange"></mt-picker>
			</div>
		</mt-popup>

		<!--<div class="pickerBox" v-show="isShowPicker">
			<div class="shade" @click="pickerHide"></div>
<div class="picker">					<div class="pickerTop">
						<div>取消</div>
						<div @click="handleConfirm">确认</div>
					</div>
					<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
			</div>
		</div>-->

	</div>
</template>

<script>
	export default {
		name: "clientRefund",
		data() {
			return {
				slots: [{
					values: ['1990', '1991', '1992', '1993', '1994', '1995', '1996']
				}],

				listUrl: [{
						path: "/sale/visitRecord",
						name: "一月",
						price: "1",
						icon: "../../../assets/home_blue.png"
					},
					{
						path: "/sale/personalChild/clientRefund",
						name: "二月",
						price: "2",
						icon: "../../../assets/home_blue.png"
					},
					{
						path: "/sale/potentialClients",
						name: "三月",
						price: "3",
						icon: "../../../assets/home_blue.png"
					},
					{
						path: "/sale/dealCustomer",
						name: "四月",
						price: "4",
						icon: "../../../assets/home_blue.png"
					}
				],
				thisSlots:null,
				isShowPicker: false,
				year: null
			}
		},
		created() {

			
		},
		updated() {
			//      this.tabbar.forEach(v=>{
			//        if(window.location.pathname === v.path){
			//          this.currentPage = v.name
			//        }
			//      })
			//
			//      sessionStorage.setItem("currentPath",window.location.pathname)
			console.log(this)
		},
		mounted() {
			this.year=this.slots[0].values[0];
		},
		methods: {
			onValuesChange(picker, values) {
				console.log(this.year = values[0])
			},
			handleConfirm(e) {
				console.log(this.num);
				this.isShowPicker = false;
			},
			showPicker(data){ //Picker显示
				console.log(data)
				this.isShowPicker = true; 
				this.thisSlots = data;
			},
			handleClick() {
				
			}
		},
		computed: {

		}

	}
</script>

<style scoped lang="less">
	@import "./client-refund.less";
</style>