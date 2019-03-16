<template>
  <div class="issue-list">
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Body</th>
          <th v-if="hasStatus">Status</th>
          <th v-if="hasAction">Aciton</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="issue in issues" :key="issue.id">
          <td class="number">{{issue.number}}</td>
          <td class="title">{{issue.title}}</td>
          <td class="body">{{issue.body}}</td>
          <td class="state" v-if="hasStatus">{{issue.state}}</td>
          <td class="action" v-if="hasAction">
            <button
              class="btn btn-primary"
              v-if="issue.state === 'closed'"
              @click="() => handleOpenIssue(issue)"
              >Reopen</button>
            <button
              class="btn btn-light"
              v-if="issue.state === 'open'"
              @click="() => handleCloseIssue(issue)"
              >Close</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'IssueList',
  props: {
    issues: {
      type: Array,
      default: []
    },
    hasStatus: {
      type: Boolean,
      default: true
    },
    hasAction: {
      type: Boolean,
      default: true
    },
  },
  methods: {
    handleOpenIssue (issue) {
      this.$emit('open', issue)
    },
    handleCloseIssue (issue) {
      this.$emit('close', issue)
    }
  }
}
</script>

<style lang="scss" scoped>
.issue-list {
}
</style>
