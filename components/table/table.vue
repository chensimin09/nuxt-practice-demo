Vue.component('my-table', {
props: ['config']
template:
`<a-table
  :columns = "config.columns"
  :pagination = "config.pagination"
  :loading = "config.loading"
  :datasource = "config.data">
</a-table>`
})
