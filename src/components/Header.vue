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
}
</script>

<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}

.header {
  padding: 10px;
  text-align: left;
  .router-link {
    padding: 10px;
    color: lightseagreen
  }

  .router-link-active {
    font-weight: 900;
    text-decoration: none;
    cursor: default;
    color: #555;
  }
}
</style>
