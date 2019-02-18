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
  </div>
</template>

<script>
export default {
  name: 'firComponent',
  props: { list: Array },
  data: () => {
    return {
      inputModel: ''
    }
  }
}
</script>

<style scoped>
</style>
