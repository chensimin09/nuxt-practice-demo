<template>
  <div>
    <div style="margin-top: 20px">
      <nuxt-link :to="'/listManage/detail/' + id">
        <p>
          detail详情(动态路由)
        </p>
      </nuxt-link>

      <p class="font-red">
        普通CSS
      </p>
      <p style="color:blue">
        普通Style
      </p>
      <p id="base">
        普通less
      </p>
      <p class="font-gray">
        scope里的css
      </p>

      <p class="test02-base">
        test-less
      </p>

      <p class="color2">
        test02
      </p>

      <myTable
        :columns="config.columns"
        :data="tableData"
        :loading="config.loading"
        :pagination="config.pagination"
        :scroll="config.scroll"
        rowkey="fir"
      />
    </div>
  </div>
</template>

<script>
import myTable from '@/components/table/myTable.vue'
import { commonApi, pageApi } from '@/factory/api'

export default {
  name: 'Page01',
  components: { myTable },
  data: () => {
    return {
      tableData: [],
      id: 1234,
      config: {
        columns: [
          {
            title: '第一列',
            dataIndex: 'fir',
            sorter: false,
            key: 'fir',
            fixed: 'left',
            width: 150
          },
          {
            title: '第二列',
            dataIndex: 'sec',
            sorter: true,
            key: 'sec',
            fixed: 'left',
            width: 150
          },
          {
            title: '第3列',
            dataIndex: 'thi',
            sorter: true,
            key: 'thi10',
            width: 150
          },
          {
            title: '第4列',
            dataIndex: 'thi',
            sorter: true,
            key: 'thi9',
            width: 150
          },
          {
            title: '第5列',
            dataIndex: 'thi',
            sorter: true,
            key: 'thi8',
            width: 150
          },
          {
            title: '第6列',
            dataIndex: 'thi',
            sorter: true,
            key: 'thi7',
            width: 150
          },
          {
            title: '第7列',
            dataIndex: 'thi',
            sorter: true,
            key: 'thi6',
            width: 150
          },
          {
            title: '第8列',
            dataIndex: 'thi',
            sorter: true,
            key: 'thi5',
            width: 150
          },
          {
            title: '第9列',
            dataIndex: 'thi',
            sorter: true,
            key: 'thi4',
            width: 150
          },
          {
            title: '第10列',
            dataIndex: 'thi',
            sorter: true,
            key: 'thi3',
            width: 150
          },
          {
            title: '第11列',
            dataIndex: 'thi',
            sorter: true,
            key: 'thi2',
            width: 150
          },
          {
            title: '第12列',
            dataIndex: 'thi',
            sorter: true,
            key: 'thi1',
            width: 150
          },
          {
            title: '第13列',
            dataIndex: 'thi',
            sorter: true,
            key: 'thi11',
            width: 150
          },
          {
            title: '第14列',
            dataIndex: 'thi',
            sorter: true,
            key: 'thi12',
            width: 150
          },
          {
            title: '第15列',
            dataIndex: 'thi',
            sorter: true,
            key: 'thi13',
            width: 150
          },
          {
            title: '第五列',
            dataIndex: 'thi',
            sorter: false,
            key: 'thi51',
            fixed: 'right',
            width: 150
          }
        ],
        loading: false,
        pagination: {},
        scroll: { x: 2300, y: 300 }
      }
    }
  },
  mounted: function() {
    console.log(commonApi)
    this.$axios.get(pageApi.tableData, { data: 'hhhhhh' }).then(res => {
      console.log(res)
      this.$setLocal('TEXT_DATA2', this.tableData, true)
      console.log(_.keys(res.data.data))
      this.tableData = res.data.data
      this.$setSession('TEXT_DATA2', this.tableData, true)
    })
    console.log($('.font-red'))
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
