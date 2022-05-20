import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
  userEmail: "",
  productName: "",
  productLink: "",
}

export const preorderModalSlice = createSlice({
  name: 'preorderModal',
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.isActive = action.payload;
      if (action.payload === true) {
        document.body.classList.add('disabled')
      }
      if (action.payload === false) {
        document.body.classList.remove('disabled')
      }
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setProductName: (state, action) => {
      state.productName = action.payload;
    },
    setProductLink: (state, action) => {
      state.productLink = action.payload;
    },
  }
})

export const { setActive, setUserEmail, setProductName, setProductLink } = preorderModalSlice.actions
export default preorderModalSlice.reducer