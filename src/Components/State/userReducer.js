import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: undefined,
    username: undefined,
    translations: [],
  },

  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.translations = action.payload.translations;
    },
    deleteTranslations: (state) => {
      state.translations = [];
    },
  },
});

export const { setUser, deleteTranslations } = userSlice.actions;

export default userSlice.reducer;
