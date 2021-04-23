<template>
  <div
    class="email-list-item"
    :class="{ active: isActive }"
    @click="selectEmail"
  >
    <div class="head">
      <div class="from">{{ email.from }}</div>
      <div class="time">{{ email.timestamp | formatTimestamp }}</div>
    </div>
    <div class="subject">{{ email.subject }}</div>
    <div class="body">{{ bodyPreview }}</div>
  </div>
</template>

<script>
export default {
  name: "EmailListItem",
  props: {
    email: {
      type: Object,
      required: true,
    },
  },
  computed: {
    bodyPreview() {
      return this.email.body.replace(/(<([^>]+)>)/gi, "").substring(0, 80);
    },
    isActive() {
      return this.email === this.$store.state.activeEmail;
    },
  },
  methods: {
    selectEmail() {
      this.$store.commit({
        type: "setActiveEmail",
        email: this.email,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.email-list-item {
  padding: 8px;
  cursor: pointer;
  border-bottom: 1px solid #aaa;

  &.active {
    background: #aaa;
  }

  .head {
    display: flex;
    justify-content: space-between;
  }

  .body {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #888;
  }
}
</style>
