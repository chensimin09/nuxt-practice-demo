<template>
  <div>
    <header>
      <span class="duckpin"></span>
      <span class="title">
        {{ title }}
      </span>
    </header>
    <body style="margin-top: 20px">
      <div class="subTitle">
        <span>
          下面展示的将会是一个列表， 该表用的是什么鬼，就不知道了
        </span>
        <myTable
          :columns="config.columns"
          :pagination="config.pagination"
          :data="tableData"
          :loading="config.loading"
          rowkey="fir"
        />
        <firComponent
          :list="list"
          :in-text="inText"
        />
      </div>
    </body>
  </div>
</template>

<script>
import firComponent from '@/components/firComponent.vue'
import myTable from '@/components/table/myTable.vue'
import axios from 'axios'
import { commonApi, pageApi } from '@/factory/api'

export default {
  name: 'ListOption1',
  components: { firComponent, myTable },
  async asyncData() {
    const { data } = await axios.get(pageApi.tableData)
    console.log(commonApi)
    console.log('发起请求')
    return { tableData: data.data }
  },
  data: () => {
    return {
      title: '展示下列表',
      inText: '我是个好人',
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
      },
      list: [
        { key: 1, text: '第一行' },
        { key: 2, text: '第二行' },
        { key: 3, text: '第仨行' },
        { key: 4, text: '第四行' },
        { key: 5, text: '第五行' }
      ]
    }
  }
}
</script>

<style scoped>
header > span.duckpin {
  border-left: 2px blue solid;
  border-radius: 15px;
}
header > span.title {
  padding-left: 15px;
  font-size: 14px;
  font-weight: bold;
}
body .subTitle {
  text-align: center;
}
</style>
