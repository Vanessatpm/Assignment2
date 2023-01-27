import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createHeaders } from "../../Api";

const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const updateTranslationAsync = createAsyncThunk('user/updateTranslation', async (user) => {
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


  if(response.ok){
    console.log(user.translations + "   ser ut til at dette gikk?")
  } 
});

export const addUserAsync = createAsyncThunk('user/addUserAsync', async(username) => {
  const response = await fetch(`${apiUrl}`, {
    method: "POST",
    header: createHeaders(),
    body: JSON.stringify({
      username: username,
      translations: []
    }),

  }).then((response) => response.json())
  .then((user) => {
    console.log(user)
    return user;
  })

})



export const getUserAsync = createAsyncThunk('user/getUserAsync', async (username) => {
  const response = await fetch(`${apiUrl}?username=${username}`)
  if(response.ok){
    const result = await response.json()
    return result.pop()
  } 

})

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
  extraReducers:{
    [getUserAsync.fulfilled]: (state, action) => {
      if(!action.payload){
        return false
      }
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.translations = action.payload.translations; 
    },
    [addUserAsync.fulfilled]: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.translations = action.payload.translations; 
    }
  }
  
});

export const { setUser, deleteTranslations, deleteUser, addTranslation } = userSlice.actions;

export default userSlice.reducer;
