<template>
  <div id="dark-mode-switch">
    <button @click="switchDarkMode" class="switch-btn">
      {{ toThemeName }}
      <br />
      mode
    </button>
  </div>
</template>

<script>
export default {
  name: "DarkModeSwitch",
  computed: {
    toThemeName() {
      return this.$store.state.isDarkMode ? "Light" : "Dark";
    },
  },
  methods: {
    switchDarkMode() {
      this.$store.commit("switchDarkMode");
    },
  },
};
</script>

<style lang="scss">
#dark-mode-switch {
  .switch-btn {
    padding: 5px;
    border-radius: 50%;
  }
}
</style>
