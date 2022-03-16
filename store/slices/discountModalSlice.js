import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
  userPhone: null
}

export const discountModalSlice = createSlice({
  name: 'discountModal',
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
    setUserPhone: (state, action) => {
      state.userPhone = action.payload;
    }
  }
})

export const { setActive, setUserPhone } = discountModalSlice.actions
export default discountModalSlice.reducer