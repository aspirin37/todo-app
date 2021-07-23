<template>
  <div>
    <v-app>
      <v-content>
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
      </v-content>
    </v-app>
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
      },
      ],
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
  },
};
</script>

<style>
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

/* .bottom-form::before {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
              0 8px 0 -3px #f6f6f6,
              0 9px 1px -3px rgba(0, 0, 0, 0.2),
              0 16px 0 -6px #f6f6f6,
              0 17px 2px -6px rgba(0, 0, 0, 0.2);
} */

.header-form {
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
