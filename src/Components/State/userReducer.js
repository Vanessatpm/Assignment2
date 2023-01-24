import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createHeaders } from "../../Api/index";

export const getUser = createAsyncThunk("user/getUser", async (username) => {
  const response = await fetch(`${baseUrl}?username=${username}`);
  if (response.ok) {
    const result = await response.json();
    //TODO: if result is an empty array: createUser and return the result of that call; else return one of the users?
    return result; // array of users with this username.
  }
});

export const createUser = createAsyncThunk(
  "user/createUser",
  async (username) => {
    const response = await fetch(`${baseUrl}`, {
      method: "POST",
      headers: createHeaders(),
      body: JSON.stringyfy({
        username: username,
        translations: [],
      }),
    });

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
    [getUser.fulfilled]: (state, action) => {
      state.username = action.payload;
    },
  },
});

export default userSlice.reducer;
