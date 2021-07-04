<template>
  <div>
    {{ title }}
    <div
      v-for="it in list"
      :key="it.id"
      class="todo-list__item"
    >
      <input
        v-model="it.checked"
        type="checkbox"
      >
      {{ it.text }}
      <i @click="$emit('removeItem', it.id)">X</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    title: String,
    list: Array,
  },
};
</script>
