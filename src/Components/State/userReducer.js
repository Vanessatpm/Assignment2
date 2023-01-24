import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiKey = "noroffreact";

export const getUsername = createAsyncThunk(
  "user/getUsername",
  async (username) => {
    const response = await fetch(
      "https://youthful-woozy-meteorite.glitch.me/translations?username={username}"
    );
    if (response.ok) {
      const result = await response.json();
      return result;
    }
  }
);

export const createUser = createAsyncThunk(
  "user/setUsername",
  async (username) => {
    await client.post(
      "https://youthful-woozy-meteorite.glitch.me/translations?", username={username}"
    );
    if (response.ok) {
      const result = await response.json();
      return result;
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: undefined,
  },

  extraReducers: {
    [getUsername.fulfilled]: (state, action) => {
      state.username = action.payload.username;
    },
  },
});

export default userSlice.reducer;
