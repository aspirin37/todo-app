<template>
  <div class="todo-list">
    <input
      v-model="allChecked"
      type="checkbox"
      @input="toggleAllChecked($event.target.checked)"
    >
    <todo-list
      :title="currentTab"
      :list="currentList"
      @removeItem="removeItem"
    />
    <form @submit.prevent="addNewTodo">
      <input
        v-model="newTodo"
        type="text"
      >
      <button type="submit">
        Добавить
      </button>
    </form>
    <p>{{ todosLeft }} items left</p>
    <button
      v-for="it in tabs"
      :key="it"
      class="mr-2"
      :class="currentTab === it && 'active'"
      @click="setCurrentTab(it)"
    >
      {{ it }}
    </button>
    <p>
      <button @click="clearCompleted">
        Clear completed
      </button>
    </p>
  </div>
</template>

<script>
import uniqid from 'uniqid';
import { mapState } from 'vuex';
import TodoList from './TodoList.vue';

export default {
  name: 'TodoAppOld',
  components: {
    TodoList,
  },
  data() {
    return {
      tabs: ['All', 'Active', 'Completed'],
      currentTab: 'All',
      newTodo: '',
      allChecked: false,
    };
  },
  computed: {
    ...mapState(['todoList']),
    todoLeft() {
      return this.todoList.filter((it) => !it.checked).length;
    },
    todosLeft() {
      return this.todoList.filter((it) => !it.checked).length;
    },
    todoListActive() {
      return this.todoList.filter((it) => !it.checked);
    },
    todoListCompleted() {
      return this.todoList.filter((it) => it.checked);
    },
    currentList() {
      const tabs = {
        All: this.todoList,
        Active: this.todoListActive,
        Completed: this.todoListCompleted,
      };
      return tabs[this.currentTab];
    },
  },
  watch: {
    todoList: {
      handler(val) {
        this.allChecked = val.every((it) => it.checked);
      },
      deep: true,
    },
  },
  methods: {
    addNewTodo() {
      const newTodoObj = {
        id: uniqid(),
        text: this.newTodo,
        checked: false,
      };
      this.todoList.push(newTodoObj);
      this.newTodo = '';
    },
    removeItem(id) {
      this.todoList = this.todoList.filter((it) => it.id !== id);
    },
    clearCompleted() {
      this.todoList = this.todoList.filter((it) => !it.checked);
    },
    toggleAllChecked(val) {
      this.todoList.forEach((it) => {
        it.checked = val;
      });
    },
    setCurrentTab(val) {
      this.currentTab = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.mr-2 {
  margin-right: 10px;
}

.active {
  background-color: red;
}
</style>
