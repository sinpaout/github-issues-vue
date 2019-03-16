<template>
  <div class="opened">
    <h1>Opened issues</h1>
    <IssueList :issues="openIssues" :hasStatus="false" @close="handleIssueClose" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import IssueList from '../components/IssueList'

export default {
  name: 'opened',
  components: {
    IssueList,
  },
  props: {
  },
  computed: {
    ...mapGetters('issues', ['openIssues']),
  },
  methods: {
    ...mapActions('issues', ['loadIssues', 'updateState']),
    handleIssueClose (issue) {
      this.updateState({
        number: issue.number,
        state: 'closed'
      })
    }
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
