const initialState = {
  todos: [
    { content: "This is a new Todo.", completed: false },
    { content: "This is a new COMPLETED Todo.", completed: true }
  ]
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return { todos: [...state.todos, action.payload] };
    }
    case "MOVE_TODO": {
      state.todos[action.payload.index].completed = !state.todos[
        action.payload.index
      ].completed;
      return { todos: [...state.todos] };
    }
    case "DELETE_TODO": {
      return {
        todos: state.todos.filter((_, i) => i !== action.payload.index)
      };
    }
    default:
      return state;
  }
};
