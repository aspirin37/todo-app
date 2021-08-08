<template>
  <div>
    <v-main>
      <h1>todos</h1>
      <v-card
        elevation="10"
        tile
        class="card-container ma-10 pa-3"
      >
        <v-row class="pl-4 pr-4 pb-2 header-form">
          <v-checkbox
            v-model="allChecked"
            @click="toggleAllChecked"
          />
          <v-text-field
            v-model="newTodo"
            placeholder="What needs to be done?"
            class="no-bottom-line"
            autofocus
            @keydown.enter="addNewTodo"
          />
        </v-row>
        <todo-list
          :list="currentList"
          @removeItem="removeItem"
        />
        <div class="bottom-form mt-6">
          <p>{{ todoLeft }} items left</p>
          <v-spacer />
          <button
            v-for="it in tabs"
            :key="it"
            :class="currentTab === it && 'active'"
            class="ml-10 pa-1 pl-2 pr-2"
            @click="setCurrentTab(it)"
          >
            {{ it }}
          </button>
          <v-spacer />
          <button @click="clearCompleted">
            Clear Completed
          </button>
        </div>
      </v-card>
    </v-main>
  </div>
</template>

<script>
import uniqid from 'uniqid';

import TodoList from './TodoList.vue';

export default {
  name: 'TodoApp',
  components: { TodoList },

  data() {
    return {
      allChecked: false,
      currentTab: 'All',
      newTodo: '',
      tabs: ['All', 'Active', 'Completed'],

      todoList: [{
        id: uniqid(),
        text: 'First item',
        checked: true,
      }, {
        id: uniqid(),
        text: 'Second item',
        checked: false,
      }],
    };
  },

  computed: {
    todoLeft() {
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
        localStorage.setItem('todoList', JSON.stringify(this.todoList));
        this.$store.commit('updateTodoList', this.todoList);
      },
      deep: true,
    },
  },

  created() {
    this.localSaveTodoList();
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
    clearCompleted() {
      this.todoList = this.todoList.filter((it) => !it.checked);
    },
    setCurrentTab(val) {
      this.currentTab = val;
    },
    toggleAllChecked() {
      this.todoList.forEach((it) => {
        it.checked = this.allChecked;
      });
    },
    removeItem(id) {
      this.todoList = this.todoList.filter((it) => it.id !== id);
    },
    localSaveTodoList() {
      this.todoList = JSON.parse(localStorage.getItem('todoList')) || this.todoList;
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: rgb(237, 171, 171);
}

.active {
  border: 1px solid rgb(235, 143, 143);
  border-radius: 0.2rem;
}

.bottom-form {
  display: flex;
  align-items: baseline;
}

.header-form {
  border-bottom: 1px solid rgb(130, 130, 130);
}

</style>
