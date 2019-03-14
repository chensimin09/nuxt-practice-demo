<template>
  <div>
    <span style="color: red">进入一个详情页</span>
    <p>{{ $route.params.detailId }}</p>
  </div>
</template>

<script>
export default {
  name: '_detailId',
  mounted: function() {
    console.log('详情页')
  }
}
</script>

<style scoped>
</style>
