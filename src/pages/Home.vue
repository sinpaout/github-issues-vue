<template>
  <div class="home">
    <div class="actions">
      <button
        class="btn btn-primary"
        @click="loadIssues">
        Load issues
      </button>
    </div>
    <div>
      <IssueList :issues="allIssues" :hasAction="false" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import IssueList from '../components/IssueList'

export default {
  name: 'Home',
  components: {
    IssueList,
  },
  props: {
    msg: String
  },
  computed: {
    ...mapState({
      issueCount: state => state.cart.checkoutStatus
    }),
    ...mapGetters('issues', ['all', 'allIssues']),
  },
  methods: {
    ...mapActions('issues', ['addItem', 'loadIssues']),
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.home {
  h3 {
    margin: 40px 0 0;
  }

  .actions {
    padding: 16px;
    text-align: right
  }
}
</style>
