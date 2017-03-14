import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { LoginReducer } from '../modules';

const rootReducer = combineReducers(
  {
    routing: routerReducer,
    login  : LoginReducer,
  });

export default rootReducer;
