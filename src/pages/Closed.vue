<template>
  <div class="closed">
    <h1>Closed issues</h1>
    <IssueList :issues="closedIssues" :hasStatus="false" @open="handleIssueOpen" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import IssueList from '../components/IssueList'


export default {
  name: 'closed',
  components: {
    IssueList,
  },
  props: {
    msg: String
  },
  computed: {
    ...mapGetters('issues', ['closedIssues']),
  },
  methods: {
    ...mapActions('issues', ['loadIssues', 'updateState']),
    handleIssueOpen (issue) {
      this.updateState({
        number: issue.number,
        state: 'open'
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
