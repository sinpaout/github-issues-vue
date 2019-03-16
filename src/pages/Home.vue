<template>
  <div class="home">
    <h1>Home</h1>
    <h3>Issues: {{all.length}}</h3>
    <button
      @click="addItem">
      Add Item
    </button>
    <div>
      {{all}}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  props: {
    msg: String
  },
  computed: {
    ...mapState({
      issueCount: state => state.cart.checkoutStatus
    }),
    ...mapGetters('issues', ['all']),
  },
  methods: {
    ...mapActions('issues', ['addItem']),
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
