<template>
  <div>
    这是一个首页，并且是由这个人=> {{ name }}创建
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => {
    return {
      name: 'simin'
    }
  }
}
</script>

<style scoped>
</style>
