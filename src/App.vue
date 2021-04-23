<template>
  <div id="all" :class="themeClass">
    <div id="container">
      <div id="app">
        <div id="app-header">
          <h1>Fancy email client</h1>
        </div>
        <div id="app-content">
          <div id="app-sidebar">
            <Sidebar />
          </div>
          <div id="app-email-select">
            <EmailSelect />
          </div>
          <div id="app-email-detail">
            <EmailDetail />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar/Sidebar.vue";
import EmailSelect from "./components/EmailSelect/EmailSelect.vue";
import EmailDetail from "./components/EmailDetail/EmailDetail.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    EmailSelect,
    EmailDetail,
  },
  beforeCreate() {
    this.$store.dispatch("loadEmails");
  },
  computed: {
    themeClass() {
      return this.$store.state.isDarkMode ? "theme--dark" : "theme--default";
    },
  },
};
</script>

<style lang="scss">
@import "./styles/themes.scss";

html {
  margin: 0;
  height: 100%;
}

body {
  height: 100%;
}

#all {
  height: 100%;
}

#container {
  width: 100%;
  height: 100%;
  padding-top: 60px;
  box-sizing: border-box;

  @include themed() {
    background: t($bg);
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 960px;
  max-width: 100%;
  margin: 0 auto 0 auto;
  border: 1px solid #2c3e50;
  border-radius: 6px;
  overflow: hidden;
}

#app-header {
  background: #ccc;
  color: #000;

  h1 {
    margin: 0;
    padding: 8px;
    font-size: 26px;
  }
}

#app-content {
  display: flex;
  align-items: stretch;
  min-height: 600px;
}

#app-sidebar {
  width: 10%;
  max-width: 10%;
  min-width: 10%;
  margin-right: 10px;
  padding: 8px;
}

#app-email-select {
  width: 40%;
  max-width: 40%;
  min-width: 40%;
  margin-right: 10px;
  padding: 8px;
}

#app-email-detail {
  width: 100%;
  padding: 8px;
  overflow: hidden;
}
</style>
