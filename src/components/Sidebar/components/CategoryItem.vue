<template>
  <li
    class="category-item"
    :class="{ active: isActive }"
    @click="setActiveCategory"
  >
    <b-icon :icon="category.icon" />
    <span class="name">{{ category.name }}</span>
  </li>
</template>

<script>
export default {
  name: "CategoryItem",
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.$store.state.activeCategory === this.category.id;
    },
  },
  methods: {
    setActiveCategory() {
      this.$store.commit({
        type: "setActiveCategory",
        categoryId: this.category.id,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.category-item {
  list-style: none;
  cursor: pointer;

  &.active {
    background: #aaa;
  }

  .name {
    padding-left: 5px;
  }
}
</style>
