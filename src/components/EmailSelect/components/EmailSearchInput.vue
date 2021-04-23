<template>
  <div id="email-search-input">
    <b-input-group>
      <b-form-input
        type="text"
        v-model="actualSearchText"
        placeholder="Search for email..."
      />
      <b-input-group-append>
        <button
          class="btn btn-outline-secondary"
          type="button"
          @click="setSearchText"
        >
          <b-icon-search />
        </button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  name: "EmailSelect",
  data: () => ({
    actualSearchText: "",
  }),
  methods: {
    setSearchText() {
      this.$emit("set-search-text", this.actualSearchText);
    },
  },
};
</script>

<style lang="scss">
#email-search-input {
  margin-bottom: 10px;
}
</style>
