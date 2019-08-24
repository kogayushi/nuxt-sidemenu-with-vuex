<template>
  <v-card class="mx-auto" max-width="300" tile>
    <v-list>
      <v-subheader>{{ title }}</v-subheader>
      <v-list-item v-for="menu in menus" :key="menu.pageId" :to="menu.url" nuxt>
        <v-list-item-icon>
          <v-icon v-text="menu.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="menu.name"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$store.getters.submenuOf(this.$store.getters.currentPage)
        .title
    },
    menus() {
      return this.$store.getters.submenuOf(this.$store.getters.currentPage)
        .menus
    }
  }
}
</script>
