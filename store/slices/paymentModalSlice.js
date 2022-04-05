import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActivePaymentModal: false,
}

export const paymentModalSlice = createSlice({
  name: 'paymentModal',
  initialState,
  reducers: {
    isActivePaymentModalSet: (state, action) => {
      state.isActivePaymentModal = action.payload;
      if (action.payload === true) {
        document.body.classList.add('disabled')
      }
      if (action.payload === false) {
        document.body.classList.remove('disabled')
      }
    },
  }
})

export const { isActivePaymentModalSet } = paymentModalSlice.actions
export default paymentModalSlice.reducer