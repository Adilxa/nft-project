import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: '',
  password: ''
}
console.log(initialState.login);
const loginReducer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    addLogin(state, action) {
      state.login = action.payload
    },
    addPassword(state, action) {
      state.password = action.payload
    }
  }
})

export default loginReducer.reducer;

export const { addLogin, addPassword } = loginReducer.actions;