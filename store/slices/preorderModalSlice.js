import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: true,
  userEmail: "",
  userName: "",
  userPhone: ""
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
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setUserPhone: (state, action) => {
      state.userPhone = action.payload;
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    }
  }
})

export const { setActive, setUserName, setUserPhone, setUserEmail } = preorderModalSlice.actions
export default preorderModalSlice.reducer