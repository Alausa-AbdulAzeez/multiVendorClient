import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginStart: false,
  loginSuccess: false,
  loginFailure: false,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loginStart = true;
    },
    loginSuccess: (state, action) => {
      state.loginStart = false;
      state.loginSuccess = true;
      state.user = action.payload;
    },
    loginFailure: (state) => {
      state.loginStart = false;
      state.loginFailure = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginFailure, loginStart, loginSuccess } = userSlice.actions;

export default userSlice.reducer;
