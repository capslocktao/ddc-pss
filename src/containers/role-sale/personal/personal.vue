<template>
	<div class="personal">
		<div v-for="item in listUrl" :key="item.path">
			<mt-cell :title="item.name" is-link :to="item.path">
				<img slot="icon" :src="item.icon" width="16" height="16">
			</mt-cell>
		</div>

	</div>
</template>

<script>
	export default {
		name: "personal",
		data() {
			return {
				listUrl: [{
						path: "/sale/visitRecord",
						name: "我的资料",
						icon: "../../../../static/images/home_blue.png"
					},
					{
						path: "/sale/personalChild/clientRefund",
						name: "客户回款",
						icon: "../../../../static/images/home_blue.png"
					},
					{
						path: "/sale/potentialClients",
						name: "数据统计",
						icon: "../../../../static/images/home_blue.png"
					},
					{
						path: "/sale/dealCustomer",
						name: "密码修改",
						icon: "../../../../static/images/home_blue.png"
					}
				]
			}
		},
		created() {
			//      this.tabbar.forEach(v=>{
			//        if(window.location.pathname === v.path){
			//          this.currentPage = v.name
			//        }
			//      })
		},
		updated() {
			//      this.tabbar.forEach(v=>{
			//        if(window.location.pathname === v.path){
			//          this.currentPage = v.name
			//        }
			//      })
			//
			//      sessionStorage.setItem("currentPath",window.location.pathname)
		},
		mounted() {

		},
		methods: {

		},
		computed: {

		}

	}
</script>

<style scoped lang="less">
	@import "./personal.less";
</style>