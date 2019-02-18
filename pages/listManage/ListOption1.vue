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
          :config="config"
          rowkey="fir"
        />
        <firComponent
          :list="list"
        />
        <test-table :config="config"></test-table>
      </div>
    </body>
  </div>
</template>

<script>
import firComponent from '@/components/firComponent.vue'
import myTable from '@/components/table/myTable.vue'

export default {
  name: 'ListOption1',
  components: { firComponent, myTable },
  data: () => {
    return {
      title: '展示下列表1的查询',
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
        pagination: {},
        data: [
          {
            fir: '第一列01',
            sec: '第二列01',
            thi: '第三列01',
            key: 1
          },
          {
            fir: '第一列02',
            sec: '第二列02',
            thi: '第三列02',
            key: 2
          },
          {
            fir: '第一列03',
            sec: '第二列03',
            thi: '第三列03',
            key: 3
          },
          {
            fir: '第一列04',
            sec: '第二列04',
            thi: '第三列04',
            key: 4
          }
        ]
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
