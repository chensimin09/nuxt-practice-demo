<template>
  <div>
    <p class="font-red">
      带Id的详情页 => pageRoute的详情页（动态路由）
    </p>
  </div>
</template>

<script>
import { baseDate, page } from '@/plugins/axiosService'
export default {
  name: 'Id',
  mounted: function() {
    page.getPageData(this.$axios, '1').then(res => console.log(res, 'id页面'))
    console.log('---------------------------')
    baseDate.getBaseDate(this.$axios)
  }
}
</script>

<style scoped>
</style>
