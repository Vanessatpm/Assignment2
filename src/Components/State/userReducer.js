import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: undefined
  },

  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.translations = action.payload.translations;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
