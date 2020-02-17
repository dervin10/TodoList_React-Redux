import { createStore } from "redux";
import { todoReducer } from "./Todos";

export default function ConfigureStore() {
  return createStore(
    todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
