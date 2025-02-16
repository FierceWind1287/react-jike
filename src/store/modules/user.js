//和用户相关的状态管理
import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";

const useStore = createSlice({
  name: 'user',
  initialState: {
    token: ''
  },
  //同步修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload
    }
  }
})

//解构出actionCreater
const { setToken } = useStore.actions

//获取reducer函数
const userReducer = useStore.reducer

//异步方法 完成登录获取token

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    //1.发送异步请求
    const res = await request.post('/authorizations', loginForm)
    //2.提交同步action进行token处理
    dispatch(setToken(res.data.token))
  }
}



export { setToken, fetchLogin }
export default userReducer