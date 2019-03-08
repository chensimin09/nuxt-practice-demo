<template>
  <div>
    <a-table
      :columns="columns"
      :pagination="pagination"
      :loading="loading"
      :data-source="data"
      :scroll="scroll"
    />
  </div>
</template>

<script>
export default {
  name: 'MyTable',
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    pagination: {
      type: Object,
      default: () => {}
    },
    data: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: () => false
    },
    scroll: {
      type: Object,
      default: () => {}
    }
  },
  beforeMount: function() {
    console.log('安装之前')
  },
  created: function() {
    console.log('创建之后')
  },
  mounted: function() {
    console.log('安装完成')
  },
  beforeCreate: function() {
    console.log('创建之前')
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
</style>
