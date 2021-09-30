import { combineReducers } from "redux";
import { formReducer } from './formReduce';

export const rootReducer = combineReducers({
  form: formReducer,
});