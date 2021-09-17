import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null,
    category:null
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

    login: (state,action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    setCategory: (state,action) => {
      state.category = action.payload;
    }
  },


});


export const { login,logout,setCategory } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export const selectCategory = (state) => state.user.category;

export default userSlice.reducer;
