<template>
  <v-app>
    <v-main>
      <todo-app />
    </v-main>
  </v-app>
</template>

<script>
import TodoApp from '@/components/todo-vuetify/TodoApp.vue';

export default {
  name: 'App',

  components: {
    TodoApp,
  },

  data: () => ({
    //
  }),
};
</script>
