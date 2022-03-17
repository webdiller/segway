import { createSlice } from "@reduxjs/toolkit";

/** Если true, то показываем скролл */
const initialState = {
  topSlider: true,
  accessoriesSlider: true,
  otherModelsSlider: true,
}

export const elementInViewSlice = createSlice({
  name: 'elementInView',
  initialState,
  reducers: {
    disableTopSlider: (state, action) => {
      state.topSlider = action.payload
    },
    disableAccessoriesSlider: (state, action) => {
      state.accessoriesSlider = action.payload
    },
    disableOtherModelsSlider: (state, action) => {
      state.otherModelsSlider = action.payload
    }
  }
})

export const { disableTopSlider, disableAccessoriesSlider, disableOtherModelsSlider } = elementInViewSlice.actions
export default elementInViewSlice.reducer