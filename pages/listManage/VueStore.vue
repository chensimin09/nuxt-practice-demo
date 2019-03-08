<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <span>{{ item.name }}</span>
    </div>
    <div style="margin-top: 30px">
      <a-button @click="changeList">
        Mutations
      </a-button>
    </div>
    <div style="margin-top: 30px">
      <a-button @click="actionGet">
        Actions
      </a-button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'VueStore',
  computed: {
    items() {
      return this.$store.getters['test01/doneList']
    }
  },
  methods: {
    reChangeList() {
      this.$store.commit('test01/setList', {
        list: [{ name: '12' }, { name: '13' }]
      })
    },
    ...mapMutations({
      setList: 'test01/setList'
    }),
    ...mapActions({
      getList: 'test01/getStateList'
    }),
    changeList() {
      return this.setList({
        list: [{ name: '32', done: false }, { name: '34', done: true }]
      })
    },
    actionGet() {
      this.getList()
    }
  }
}
</script>

<style scoped>
</style>
