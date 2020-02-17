export const AddNewTodo = todo => {
  return {
    type: "ADD_TODO",
    payload: { content: todo.content, completed: todo.completed }
  };
};

export const MoveTodo = index => {
  return {
    type: "MOVE_TODO",
    payload: {
      index
    }
  };
};

export const DeleteTodo = index => {
  return {
    type: "DELETE_TODO",
    payload: {
      index
    }
  };
};
