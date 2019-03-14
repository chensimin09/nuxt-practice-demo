<template>
  <div>
    <div style="margin-top: 20px">
      <nuxt-link :to="'/listManage/pageRoute/' + id">
        <p>
          detail详情(动态路由)
        </p>
      </nuxt-link>
      <hr>
      <nuxt-link :to="'/listManage/pageRoute/' + id">
        <p>
          detail详情(嵌套路由)
        </p>
      </nuxt-link>
      <hr>
      <nuxt-link :to="'/listManage/pageRoute/' + id">
        <p>
          detail详情(嵌套动态路由)
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data: () => {
    return {
      id: 1234
    }
  }
}
</script>

<style scoped>
.ant-table-thead tr {
  height: 70px !important;
}
.ant-table-tbody tr {
  height: 65px !important;
}
.font-gray {
  color: orange;
}
</style>
