<template>
  <div class="indicator">
    <div class="overlay"></div>
    <div class="loading">Loading...</div>
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

.indicator {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  .loading {
    position: fixed;
    color: #fff;
    font-weight: 900;
    font-size: 24px;
  }

  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000;
    opacity: .5;
  }
}
</style>
