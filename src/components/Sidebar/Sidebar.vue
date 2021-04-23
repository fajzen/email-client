<template>
  <div id="sidebar">
    <CategoryList />
    <DarkModeSwitch />
  </div>
</template>

<script>
import CategoryList from "./components/CategoryList.vue";
import DarkModeSwitch from "./components/DarkModeSwitch.vue";

export default {
  name: "Sidebar",
  components: {
    CategoryList,
    DarkModeSwitch,
  },
};
</script>

<style lang="scss">
#sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
