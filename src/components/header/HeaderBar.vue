!<template>
  <div>
    <v-app-bar
      dense
      dark
    >
      <v-toolbar-title>
        <v-btn
          to="/"
          outlined
        >
          Todos
        </v-btn>
      </v-toolbar-title>
      <v-spacer />

      <v-btn
        class="mr-2"
        to="hello"
      >
        <v-icon>
          mdi-head-sync
        </v-icon>
      </v-btn>
      <v-btn
        to="old"
        class="mr-2"
      >
        Old
      </v-btn>
      <v-btn
        to="axioslist"
      >
        Axios-List
      </v-btn>
      <mobile-menu />
    </v-app-bar>
  </div>
</template>

<script>
import MobileMenu from './MobileMenu.vue';

export default {
  name: 'HeaderBar',
  components: {
    MobileMenu,
  },
};
</script>

<style>

</style>
