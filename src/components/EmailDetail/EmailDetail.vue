<template>
  <div id="email-detail">
    <tempalte v-if="email">
      <div class="top">
        <h2 class="title">{{ email.subject }}</h2>
        <a class="delete" @click="deleteEmail" v-if="canDelete">
          <b-icon-trash />
        </a>
      </div>
      <div class="header">
        <div class="avatar">
          <img :src="email.avatar" :alt="email.from" />
        </div>
        <div class="header-data">
          <h3 class="name">{{ email.from }}</h3>
          <div class="time">{{ email.timestamp | formatTimestamp }}</div>
        </div>
      </div>
      <div class="body" v-html="email.body" />
    </tempalte>
    <template v-else>
      <p>Select email from menu</p>
    </template>
  </div>
</template>

<script>
export default {
  name: "EmailDetail",
  computed: {
    email() {
      return this.$store.state.activeEmail;
    },
    canDelete() {
      return this.$store.state.activeCategory !== "trash";
    },
  },
  methods: {
    deleteEmail() {
      this.$store.commit({
        type: "deleteEmail",
        email: this.email,
      });
    },
  },
};
</script>

<style lang="scss">
#email-detail {
  height: 100%;
  padding: 8px;
  overflow-y: auto;

  .top {
    display: flex;
    justify-content: space-between;

    .delete {
      cursor: pointer;
    }
  }

  .header {
    display: flex;
    margin-bottom: 10px;

    .avatar {
      width: 150px;
      height: 150px;
      margin-right: 10px;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }

    .name {
      font-size: 20px;
    }
  }

  .body {
    overflow-x: auto;
  }
}
</style>
