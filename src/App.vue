<template>
  <v-app>
    <header-bar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderBar from './components/header/HeaderBar.vue';

export default {
  name: 'App',
  components: { HeaderBar },

};
</script>
