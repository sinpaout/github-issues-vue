<template>
  <div class="header">
    <router-link class="router-link" to="/home">Home</router-link>
    <router-link class="router-link" to="/opened">Opened</router-link>
    <router-link class="router-link" to="/closed">Closed</router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}

.header {
  .router-link {
    padding: 10px;
    color: lightseagreen
  }
}
</style>
