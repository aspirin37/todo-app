export default {
  state: {
    todoList: [],
  },
  mutations: {
    updateTodoList(state, todoList) {
      state.todoList = todoList;
    },
  },
};
