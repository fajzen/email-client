<template>
  <div id="email-select">
    <EmailSearchInput @set-search-text="setSearchText" />
    <div id="email-list">
      <div id="email-list-items">
        <EmailListItem
          v-for="email in filteredEmails"
          :key="getEmailId(email)"
          :email="email"
          @select-email="selectEmail"
        />
      </div>
      <div id="email-list-count">
        Showing {{ filteredEmails.length }} of {{ emailsTotalCount }} mails
      </div>
    </div>
  </div>
</template>

<script>
import EmailSearchInput from "./components/EmailSearchInput.vue";
import EmailListItem from "./components/EmailListItem.vue";

export default {
  name: "EmailSelect",
  components: {
    EmailSearchInput,
    EmailListItem,
  },
  data: () => ({
    searchText: "",
  }),
  computed: {
    emailsTotalCount() {
      return this.$store.getters.categoryEmails.length;
    },
    filteredEmails() {
      const allEmails = this.$store.getters.categoryEmails;
      const searchText = this.searchText;

      return searchText
        ? allEmails.filter(
            (email) =>
              email.subject.includes(searchText) ||
              email.body.includes(searchText)
          )
        : allEmails;
    },
  },
  methods: {
    setSearchText(newSearchText) {
      this.searchText = newSearchText;
    },
    getEmailId(email) {
      return `${email.from},${email.to},${email.timestamp}`;
    },
    selectEmail(email) {
      this.$store.commit({
        type: "setActiveEmail",
        email,
      });
    },
  },
};
</script>

<style lang="scss">
#email-select {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
#email-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  border: 1px solid #aaa;
}

#email-list-items {
  max-height: 600px;
  overflow-y: auto;
}
#email-list-count {
  padding: 8px;
  text-align: right;
}
</style>
