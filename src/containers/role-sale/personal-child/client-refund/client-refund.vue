<template>
	<div class="clientRefund">
		<mt-header fixed title="客户回款">
			<router-link to="/sale/personalChild" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		<!--<v-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
			<ul class="list" v-for="(val, key) in pageList">
				<li>
					<div>我是小11</div>
					<div>我是小11</div>
				</li>
			</ul>
		</v-loadmore>-->
	</div>
</template>

<script>
	export default {
		name: "clientRefund",
		data() {
			return {
				listUrl: []
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
	@import "./client-refund.less";
</style>