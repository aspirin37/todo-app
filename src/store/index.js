import Vue from 'vue';
import Vuex from 'vuex';
import uniqid from 'uniqid';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: JSON.parse(localStorage.getItem('todoList')) || [{
      id: uniqid(),
      text: 'Купить молоко',
      checked: true,
    }, {
      id: uniqid(),
      text: 'Погладить кота',
      checked: false,
    }, {
      id: uniqid(),
      text: 'А потом нассать',
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
