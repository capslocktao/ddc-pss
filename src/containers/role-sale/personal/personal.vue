<template>
	<div class="personal">
    <mt-header fixed title="我的"/>
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
						path: `${this.host}/sale/visitRecord`,
						name: "我的资料",
						icon: "@/assets/home_blue.png"
					},
					{
						path: `${this.host}/sale/personal/clientRefund`,
						name: "客户回款",
						icon: "@/assets/home_blue.png"
					},
					{
						path: `${this.host}/sale/personal/statistics`,
						name: "数据统计",
						icon: "@/assets/home_blue.png"
					},
					{
						path: `${this.host}/sale/personal/pwd`,
						name: "密码修改",
						icon: "@/assets/home_blue.png"
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
