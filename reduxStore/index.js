import { combineReducers, createrStore, createStore } from "redux";
import counterReducer from "./counter";
import taskReducer from "./tasks";
import postReducer from "./posts";

const rootReducer = combineReducers({
  counter: counterReducer,
  tasks: taskReducer,
  posts: postReducer,
})

const store = createStore(rootReducer)
export default store;