<template>
  <v-app-bar color="#6A76AB" dark :scroll-target="scrollTarget">
    <v-toolbar-title>
      Side Menu Example with Nuxt.js and Vuex
    </v-toolbar-title>
    <template v-slot:extension>
      <v-tabs align-with-title background-color="transparent">
        <v-tab
          v-for="menu in grobalMenus"
          :key="menu.pageId"
          :to="menu.url"
          :class="{ 'v-tab--active': isSamePageGroup(menu.pageId) }"
          nuxt
          v-on="on"
        >
          <v-menu open-on-hover offset-y>
            <template v-slot:activator="{ on }">
              <span text v-on="on">
                {{ menu.name }}
                <v-icon right>arrow_drop_down</v-icon>
              </span>
            </template>
            <v-list class="grey lighten-3">
              <v-list-item
                v-for="submenu in menus(menu.pageId)"
                :key="submenu.pageId"
                :to="submenu.url"
                nuxt
              >
                {{ submenu.name }}
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>
<script>
export default {
  props: {
    scrollTarget: {
      type: String,
      required: true
    }
  },
  computed: {
    grobalMenus() {
      return this.$store.getters.submenuOf('index').menus
    },
    menus() {
      return (pageId) => {
        return this.$store.getters.submenuOf(pageId).menus
      }
    },
    isSamePageGroup() {
      return function(pageId) {
        return this.$store.getters.isSamePageGroup(pageId)
      }
    }
  }
}
</script>
