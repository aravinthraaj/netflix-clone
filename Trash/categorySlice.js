import { createSlice } from "@reduxjs/toolkit";


export const cartegorySlice = createSlice({
  name:"category",
  initialState:{
    Category:null
  },

  reducers:{

    setCategory: (state,action) => {
      state.Category = action.payload;
    }
  }
});

export const { setCategory } = cartegorySlice.actions;

export const selectCategory = (state) => state

export default cartegorySlice.reducer;