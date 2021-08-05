<template>
  <v-app>
    <v-main>
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
          Hello
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
      </v-app-bar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

};
</script>
