import { combineReducers } from "redux";
import todoReducer from "../slices/todoSlice";

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
