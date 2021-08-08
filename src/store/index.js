import Vue from 'vue';
import Vuex from 'vuex';
import uniqid from 'uniqid';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: JSON.parse(localStorage.getItem('todoList')) || [{
      id: uniqid(),
      text: 'First item',
      checked: true,
    }, {
      id: uniqid(),
      text: 'Second item',
      checked: false,
    }],
  },
  mutations: {
    addNewTodo(state, todo) {
      state.todoList.push(todo);
    },
    updateTodoList(state, todoList) {
      state.todoList = todoList;
    },
  },
});
