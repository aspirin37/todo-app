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
          v-model="it.text"
          class="no-bottom-line"
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

.no-bottom-line .v-text-field__details {
  display: none;
}
.no-bottom-line .v-input__slot::before {
  display: none;
}
.no-bottom-line .v-input__slot::after {
  display: none;
}
</style>
