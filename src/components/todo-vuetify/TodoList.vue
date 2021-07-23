!<template>
  <div>
    <div
      v-for="it in list"
      :key="it.id"
    >
      <v-row class="pa-4 pb-2 row">
        <v-checkbox
          v-model="it.checked"
        />
        <v-text-field
          class="no-bottom-line"
          :value="it.text"
        />
        <button
          @click="$emit('removeItem', it.id)"
        >
          <v-icon color="red">
            mdi-close
          </v-icon>
        </button>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    list: Array,
  },
};
</script>

<style>
.row {
  border-bottom: 1px solid rgb(130, 130, 130);
}
</style>
