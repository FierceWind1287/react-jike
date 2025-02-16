//组合redux子模块 + 导出store实例
import { useReducer } from "react";
import userReducer from "./modules/user";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    user: useReducer
  }
})