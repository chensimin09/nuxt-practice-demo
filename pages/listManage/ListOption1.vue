<template>
  <div>
    <header>
      <span class="duckpin"></span>
      <span class="title">{{ title }}</span>
    </header>
    <body style="margin-top: 20px">
    <div class="subTitle">
      <span>
          下面展示的将会是一个列表， 该表用的是什么鬼，就不知道了
      </span>
      <my-table config="config"></my-table>
    </div>
    </body>
  </div>

</template>

<script>
export default {
  name: 'ListOption1',
  data: () => {
    return {
      title: '展示下列表1的查询',
      config: {
        columns: [],
        loading: true,
        pagination: {},
        data: []
      }
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
