<template>
    <div>{{this.$route.query.id}}</div>
</template>

<script>
    export default {
        name: "customs-detail",
      mounted(){
          console.log(this.$route.query.id)
      }
    }
</script>

<style lang="less" scoped>
@import "./customsDetail.less";
</style>
