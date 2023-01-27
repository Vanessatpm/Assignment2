import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;
export const updateTranslationAsync = createAsyncThunk('user/updateTranslationAsync', async (user) => {
  const response = await fetch(`${apiUrl}/${user.id}`, {
    method: 'PATCH',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      translations: user.translations
    })
  })
  console.log(user)

  if(response.ok){
    console.log(user.translations + "   ser ut til at dette gikk?")
  } 
});

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
    addTranslation: (state, action) => {
      state.translations.push(action.payload);
    },

    deleteTranslations: (state) => {
      state.translations = [];
    },
    deleteUser: (state) => {
      state.id = undefined;
      state.username = undefined;
      state.translations = [];
    },
  },
  
});

export const { setUser, deleteTranslations, deleteUser } = userSlice.actions;

export default userSlice.reducer;
