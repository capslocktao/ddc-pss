<template>
	<div class="picker">
		<mt-popup v-model="isShowPicker" :closeOnClickModal="false" position="bottom">
			<div class="pickerBox">
				<div class="pickerTop">
					<div @click="handleCancel">取消</div>
					<div @click="handleConfirm">确认</div>
				</div>
				<mt-picker :slots="data" value-key='name' @change="onValuesChange"></mt-picker>
			</div>
		</mt-popup>
	</div>
</template>

<script>

	export default {
		name: "picker",
		props: {
			data: {},
			isShowPicker: true
		},
    mounted() {
		},
    created(){
    },
    updated(){
      this.changData = this.data[0].values[0]
    },
    data(){
		  return{
        changData:"",
        type:false
      }
    },
		methods: {
			onValuesChange(picker, values) {
				this.changData = values[0]
			},
			handleConfirm(e) { //确认点击事件

        this.$emit("selectDone",this.changData)

			},
      handleCancel(){
        console.log(this.data[0].values[0]);
        this.$emit("selectCancel");

      }
		}

	}
</script>

<style lang="less" scoped>
	@import "./picker.less";
</style>
