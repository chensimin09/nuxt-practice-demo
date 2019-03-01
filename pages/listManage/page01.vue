<template>
  <div>
    <myTable
      :columns="config.columns"
      :data="tableData"
      :loading="config.loading"
      :pagination="config.pagination"
      rowkey="fir"
    />
  </div>
</template>

<script>
import myTable from '@/components/table/myTable.vue'
import { commonApi, pageApi } from '@/factory/api'

export default {
  name: 'page01',
  components: { myTable },
  data: () => {
    return {
      tableData: [],
      config: {
        columns: [
          {
            title: '第一列',
            dataIndex: 'fir',
            sorter: false,
            key: 'fir'
          },
          {
            title: '第二列',
            dataIndex: 'sec',
            sorter: true,
            key: 'sec'
          },
          {
            title: '第三列',
            dataIndex: 'thi',
            sorter: true,
            key: 'thi'
          }
        ],
        loading: false,
        pagination: {}
      }
    }
  },
  mounted: function() {
    // async asyncData({ app }) {
    //   console.log(app)
    //   const { data } = await app.$axios.get(pageApi.tableData)
    //   console.log(commonApi)
    //   console.log('发起请求')
    //   return { tableData: data.data }
    // },
    this.$axios.get(pageApi.tableData).then(res => {
      console.log(commonApi)
      this.$setLocal('TEXT_DATA2', this.tableData, true)
      this.tableData = res.data.data
      this.$setSession('TEXT_DATA2', this.tableData, true)
    })

    // this.setLocal('TEXT_DATA2', this.tableData, true)
  }
}
</script>

<style scoped>
</style>
