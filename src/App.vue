<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Indicator v-if="isLoading > 0"/>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import Header from './components/Header.vue'
import Indicator from './components/Indicator.vue'
export default {
  name: 'app',
  components: {
    Header,
    Indicator,
  },
  computed: {
    ...mapGetters('page', ['isLoading']),
  },
  methods: {
    ...mapActions('issues', ['loadIssues']),
  },
  created () {
    this.loadIssues()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */

}
</style>
