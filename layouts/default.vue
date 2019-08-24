<template>
  <v-app>
    <v-content>
      <v-card class="overflow-hidden" height="100%">
        <v-app-bar color="#6A76AB" dark scroll-target="#scrolling-techniques-4">
          <v-toolbar-title>
            Side Menu Example with Nuxt.js and Vuex
          </v-toolbar-title>
          <template v-slot:extension>
            <v-tabs align-with-title background-color="transparent">
              <v-tab
                v-for="menu in menus"
                :key="menu.pageId"
                :to="menu.url"
                link
                :class="{ 'v-tab--active': isSamePageGroup(menu.pageId) }"
                >{{ menu.name }}</v-tab
              >
            </v-tabs>
          </template>
        </v-app-bar>
        <v-sheet id="scrolling-techniques-4">
          <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
              <v-flex xs3>
                <side-menu />
              </v-flex>
              <v-flex xs>
                <v-card tile height="100%">
                  <nuxt />
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-sheet>
      </v-card>
    </v-content>
    <v-footer fixed app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import SideMenu from '~/components/SideMenu'

export default {
  components: {
    SideMenu
  },
  computed: {
    menus() {
      return this.$store.getters.submenuOf('index').menus
    },
    isSamePageGroup() {
      return function(pageId) {
        return this.$store.getters.isSamePageGroup(pageId)
      }
    }
  }
}
</script>
