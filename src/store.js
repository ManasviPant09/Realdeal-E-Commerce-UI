import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/userSlice";
import authReducer from "./redux/authSlice";

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer
  });

const store = configureStore({reducer : rootReducer});
export default store;