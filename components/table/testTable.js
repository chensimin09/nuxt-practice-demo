import Vue from 'vue'

Vue.component('test-table', {
  props: { config: Object },
  template: `<a-table
  :columns = "config.columns"
  :pagination = "config.pagination"
  :loading = "config.loading"
  :datasource = "config.data">
</a-table>`
})
