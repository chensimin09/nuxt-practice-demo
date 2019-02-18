<template>
  <div>
    <a-table
      :columns="config.columns"
      :pagination="config.pagination"
      :loading="config.loading"
      :data-source="config.data"
    />
  </div>
</template>

<script>
export default {
  name: 'MyTable',
  props: ['config']
}
</script>

<style scoped>
</style>
