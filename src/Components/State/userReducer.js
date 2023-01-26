import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
<<<<<<< HEAD
    username: undefined
=======
    id: undefined,
    username: undefined,
    translations: [],
>>>>>>> ea3a31e2e70b1e253b2b0079d3aa48a25fc2e176
  },

  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.translations = action.payload.translations;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
