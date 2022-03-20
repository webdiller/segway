import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeModal: false
}

export const productModalSlice = createSlice({
  name: 'productModal',
  initialState,
  reducers: {
    productModalActiveSet: (state, action) => {
      state.activeModal = action.payload;
      if (action.payload === true) {
        document.body.classList.add('disabled')
      }
      if (action.payload === false) {
        document.body.classList.remove('disabled')
      }
    },
  }
})

export const { productModalActiveSet } = productModalSlice.actions
export default productModalSlice.reducer