<template>
  <p>{{ message }}</p>
</template>

<script>
export default {
  data: () => {
    console.log('VueApp.vue is loaded');
    return {
      message: 'Hello, Vue with Webpack!'
    }
  }
}
</script>

<style scoped>
p {
  color: blue;
  font-size: 20px;
}
</style>