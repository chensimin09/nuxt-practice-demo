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
      get: () => {
        return 'tetetet'
      },
      set: inputModel => {
        return inputModel
      }
    }
  }
}
</script>

<style scoped>
</style>
