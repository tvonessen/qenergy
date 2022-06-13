import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      if (action.type === "auth/login") {
        return true;
      }
    },
    logout: (state, action) => {
      return false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
