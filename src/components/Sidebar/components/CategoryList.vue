<template>
  <ul class="category-list">
    <CategoryItem
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
  </ul>
</template>

<script>
import CategoryItem from "./CategoryItem.vue";

export default {
  name: "CategoryList",
  components: {
    CategoryItem,
  },
  data: () => ({
    categories: [
      {
        id: "inbox",
        name: "Inbox",
        icon: "box-arrow-down",
      },
      {
        id: "sent",
        name: "Sent",
        icon: "box-arrow-up",
      },
      {
        id: "trash",
        name: "Trash",
        icon: "trash",
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
.category-list {
  margin: 0;
  padding: 0;
}
</style>
