<template>
  <v-app>
    <v-content>
      <v-card class="overflow-hidden" height="100%">
        <the-header scroll-target="#scrolling-techniques-4" />
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
import TheHeader from '~/components/TheHeader'
import SideMenu from '~/components/SideMenu'

export default {
  components: {
    TheHeader,
    SideMenu
  }
}
</script>
