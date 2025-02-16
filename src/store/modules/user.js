//和用户相关的状态管理
import { createSlice } from "@reduxjs/toolkit";

const useStore = createSlice({
  name: 'user',
  initialState: {
    token: ''
  },
  //同步修改方法
  reducer: {
    setToken(state, action) {
      state.token = action.payload
    }
  }
})

//解构出actionCreater
const { setToken } = useStore.actions

//获取reducer函数
const userReducer = useStore.reducer

export { setToken }
export default userReducer