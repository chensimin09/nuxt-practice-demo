<template>
  <div>
    <div v-for="l in list" :key="l.$index">
      {{ l.text }}
    </div>
    <div>{{ inputModel }}</div>
    <br>
    <label>
      <input v-model="inputModel" type="text">
    </label>
    <div>
      <span>(inText + inputModel) = {{ activeValue }}</span>
    </div>
    <div>
      <button @click="getActive()">
        点击我
      </button>
      <span> {{ activeValue }}</span>
    </div>
    <div>
      {{ allKey }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'firComponent',
  props: { list: Array, inText: String },
  data: () => {
    return {
      inputModel: ''
    }
  },
  computed: {
    activeValue: {
      get: function() {
        return this.inputModel * 2
      },
      set: function(val) {
        this.inputModel = val + 3
      }
    },
    allKey: function() {
      let allkeyVal = 1
      this.list.forEach(l => {
        allkeyVal += l.key * 1
      })
      return allkeyVal
    }
  },
  methods: {
    getActive() {
      this.activeValue = this.inputModel + 6
    }
  }
}
</script>

<style scoped>
</style>
