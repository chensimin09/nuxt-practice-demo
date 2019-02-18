<template>
  <div>
    <span v-for="l in list" :key="l.$index">
      {{ l.text }}
    </span>
    <label>
      <input v-model="inputText" type="text">
    </label>
    <span>{{ inputText }}</span>
  </div>
</template>

<script>
export default {
  name: 'firComponent',
  props: ['list', 'inputText']
}
</script>

<style scoped>
</style>
