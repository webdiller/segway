import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
  userName: "",
  userPhone: ""
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
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setUserPhone: (state, action) => {
      state.userPhone = action.payload;
    }
  }
})

export const { setActive, setUserName, setUserPhone } = discountModalSlice.actions
export default discountModalSlice.reducer