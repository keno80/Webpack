<template>
  <div>
    <h2 class="title">标题1111111</h2>
    <h2>{{name}}</h2>
    <p>内容</p>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        name: 'keno'
      }
    }
  }
</script>

<style scoped>
  .title {
    color: orange;
  }
</style>
