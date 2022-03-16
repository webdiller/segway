import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
  currentPosition: 0
}

export const fancyModalSlice = createSlice({
  name: 'fancyModal',
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
    setPositionSlide: (state, action) => {
      state.currentPosition = action.payload;
    }
  }
})

export const { setActive, setPositionSlide } = fancyModalSlice.actions
export default fancyModalSlice.reducer